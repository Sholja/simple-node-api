import fs from 'fs';

const load = file => {
    const sqlQuery = fs
        .readFileSync(`${__dirname}/${file}`)
        .toString()
        .replace(/(\r\n|\n|\r)/gm, ` `)
        .replace(/\s+/g, ` `);

    return sqlQuery;
};

export const movieQueries = {
    searchMovies: load(`movies/search-movies.sql`),
    getMovieDetails: load(`movies/get-movie-details.sql`),
};

