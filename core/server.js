import express from 'express';

import config from './config.js';
import { initializeDatabase, createDatabase } from './db/index.js';
import { series } from './helpers.js';

import applicationRoutes from '../routes/application.js';
import moviesRouter from '../routes/movies.js';

const app = express();

const loadRoutes = () => {
    app.use('/application', applicationRoutes);
    app.use('/movies', moviesRouter);
};

const runMigrationsAndSeeders = async () => {
    const commands = [`npm run migrate`, 'npm run seed-dev'];

    const error = await series(commands);

    if (!error) {
        console.log(`Migrations and seeds are completed`);
    } else {
        console.log(`Error running migrations and seeders: `, error);
    }
};

export const initializeServer = async () => {
    loadRoutes();

    const dbConfig = Object.assign({}, config.db);
    dbConfig.database = undefined;
    await initializeDatabase(dbConfig);
    await createDatabase();
    await runMigrationsAndSeeders();

    app.listen(config.port, () => {
        console.log(`Server started at port ${config.port}`);
    });
};

