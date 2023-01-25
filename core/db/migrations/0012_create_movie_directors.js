const constants = require('../../sequelize-constants');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface
            .createTable(constants.TABLES.movieDirectors, {
                movie_id: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    primaryKey: true,
                    allowNull: false,
                    references: {
                        model: constants.TABLES.movies,
                        key: constants.PRIMARY_KEYS.movies,
                    },
                },
                director_id: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    primaryKey: true,
                    allowNull: false,
                    references: {
                        model: constants.TABLES.directors,
                        key: constants.PRIMARY_KEYS.directors,
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
            .then(() => queryInterface.sequelize.query(`ALTER TABLE \`${constants.TABLES.movieDirectors}\` CONVERT TO CHARACTER SET \`utf8\` COLLATE \`utf8_unicode_ci\`;`)),
    down: queryInterface => queryInterface.dropTable(constants.TABLES.movieDirectors),
};

