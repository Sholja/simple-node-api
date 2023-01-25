import { execQuery, execQuerySingle } from '../core/db/index.js';
import { movieQueries } from '../core/db/queries/index.js';
import { formatSqlData } from '../core/helpers.js';

export const searchMoviesBL = async search => {
    let movies = await execQuery(movieQueries.searchMovies, [search]);

    for (let i = 0; i < movies.length; i++) {
        movies[i].actors = await formatSqlData(movies[i].actors, `actor_id`);
    }

    return movies;
};

export const getMovieDetailsBL = async movieId => {
    const movie = await execQuerySingle(movieQueries.getMovieDetails, [movieId]);
    movie.actors = await formatSqlData(movie.actors, `actor_id`);
    movie.directors = await formatSqlData(movie.directors, `director_id`);
    movie.genres = await formatSqlData(movie.genres, `genre_id`);

    return movie;
};

