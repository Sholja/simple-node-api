import { searchMoviesBL, getMovieDetailsBL } from '../business-logic/movies.js';

export const searchMovies = async (req, res) => {
    try {
        const search = req.query.search ? `%${req.query.search.trim().toLowerCase()}%` : null;
        const movies = await searchMoviesBL(search);

        res.status(200).json({ movies });
    } catch (error) {
        console.log('In controller error ', error);
        res.status(400).json(error);
    }
};

export const getMovieDetails = async (req, res) => {
    try {
        const movieId = req.params.id || null;
        const movie = movieId ? await getMovieDetailsBL(movieId) : {};

        res.status(200).json(movie);
    } catch (error) {
        console.log('In controller error ', error);
        res.status(400).json(error);
    }
};

