const constants = require('../../sequelize-constants');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface
            .createTable(constants.TABLES.movieGenres, {
                movie_id: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    primaryKey: true,
                    allowNull: false,
                    references: {
                        model: constants.TABLES.movies,
                        key: constants.PRIMARY_KEYS.movies,
                    },
                },
                genre_id: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    primaryKey: true,
                    allowNull: false,
                    references: {
                        model: constants.TABLES.genres,
                        key: constants.PRIMARY_KEYS.genres,
                    },
                },
                created_at: {
                    type: constants.DATA_TYPES.timestamp,
                    defaultValue: Sequelize.literal(constants.LITERALS.currentTimestamp),
                    allowNull: false,
                },
                updated_at: {
                    type: constants.DATA_TYPES.timestamp,
                    defaultValue: Sequelize.literal(constants.LITERALS.currentTimestamp),
                    allowNull: false,
                },
            })
            .then(() => queryInterface.sequelize.query(`ALTER TABLE \`${constants.TABLES.movieGenres}\` CONVERT TO CHARACTER SET \`utf8\` COLLATE \`utf8_unicode_ci\`;`)),
    down: queryInterface => queryInterface.dropTable(constants.TABLES.movieGenres),
};

