# About

Basic API written in Node.JS

# Setup

-   `yarn install`
-   `yarn start`

# Routes

-   `GET http://localhost:4000/application/health`
-   `GET http://localhost:4000/movies?search=movie_name` (pass "search" as a query param for searching movies)
-   `GET http://localhost:4000/movies/:id` (pass the "movie_id" as a URL param to fetch the movie details)

# Notes

-   `You need to install and start MySQL. More info can be found here: https://flaviocopes.com/mysql-how-to-install/`
-   `If MySQL is up and running, once the API is started, it will create the database as well as migrations & seeders`

