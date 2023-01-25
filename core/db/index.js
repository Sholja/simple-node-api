import { Sequelize } from 'sequelize';

import config from '../config.js';

let sequelize = {};

const checkDbExistsQuery = () => {
    return `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = "${config.db.database}"`;
};

const createDbQuery = () => {
    return `CREATE DATABASE ${config.db.database}`;
};

export const initializeDatabase = dbConfig => {
    try {
        sequelize = new Sequelize(dbConfig);
    } catch (error) {
        console.log('Error initializing DB: ', error);
    }
};

export const execQuery = (query, options) => {
    return sequelize.query(query, {
        bind: options,
        nest: true,
    });
};

export const execQuerySingle = (query, options) => {
    return sequelize.query(query, {
        bind: options,
        nest: true,
        plain: true,
    });
};

export const createDatabase = async () => {
    try {
        const result = await execQuerySingle(checkDbExistsQuery());

        if (result) {
            console.log('Skipping creation. DB exists.');
        } else {
            await execQuery(createDbQuery());
        }

        initializeDatabase(config.db);
    } catch (error) {
        console.log('Error creating DB: ', error);
    }
};

