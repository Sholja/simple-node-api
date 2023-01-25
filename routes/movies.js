import express from 'express';

import { searchMovies, getMovieDetails } from '../controllers/movies.js';

const router = express.Router();

router.get('/', searchMovies);
router.get('/:id', getMovieDetails);

export default router;

