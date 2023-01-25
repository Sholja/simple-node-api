SELECT m.title, m.year, m.poster, GROUP_CONCAT(JSON_OBJECT('actor_id', a.actor_id, 'first_name', a.first_name, 'last_name', a.last_name)) as actors
FROM movies m
LEFT JOIN movie_actors ma ON ma.movie_id = m.movie_id
LEFT JOIN actors a ON a.actor_id = ma.actor_id
WHERE $1 IS NULL OR LOWER(m.title) LIKE LOWER($1)
GROUP BY m.title, m.year, m.poster;