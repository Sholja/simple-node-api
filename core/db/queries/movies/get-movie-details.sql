SELECT m.movie_id, m.title, m.year, m.runtime, m.poster, m.plot,
GROUP_CONCAT(JSON_OBJECT('actor_id', a.actor_id, 'first_name', a.first_name, 'last_name', a.last_name)) as actors,
GROUP_CONCAT(JSON_OBJECT('director_id', d.director_id, 'first_name', d.first_name, 'last_name', d.last_name)) as directors,
GROUP_CONCAT(JSON_OBJECT('genre_id', g.genre_id, 'name', g.name)) as genres
FROM movies m
LEFT JOIN movie_actors ma ON ma.movie_id = m.movie_id
LEFT JOIN actors a ON a.actor_id = ma.actor_id
LEFT JOIN movie_directors md ON md.movie_id = m.movie_id
LEFT JOIN directors d ON d.director_id = md.director_id
LEFT JOIN movie_genres mg ON mg.movie_id = m.movie_id
LEFT JOIN genres g ON g.genre_id = mg.genre_id
WHERE m.movie_id = $1
GROUP BY m.movie_id, m.title, m.year, m.poster, m.runtime, m.plot;
