module.exports = {
    TABLES: {
        actors: 'actors',
        directors: 'directors',
        genres: 'genres',
        movies: 'movies',
        movieGenres: 'movie_genres',
        movieActors: 'movie_actors',
        movieDirectors: 'movie_directors',
    },
    PRIMARY_KEYS: {
        actors: 'actor_id',
        directors: 'director_id',
        genres: 'genre_id',
        movies: 'movie_id',
    },
    LITERALS: {
        currentTimestamp: `CURRENT_TIMESTAMP`,
    },
    DATA_TYPES: {
        timestamp: `TIMESTAMP`,
        timestampNull: `TIMESTAMP NULL`,
    },
};

