const constants = require('../../sequelize-constants');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface
            .createTable(constants.TABLES.movies, {
                movie_id: {
                    field: constants.PRIMARY_KEYS.movies,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.BIGINT.UNSIGNED,
                },
                title: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                year: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                poster: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                runtime: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                plot: {
                    type: Sequelize.TEXT,
                    allowNull: false,
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
            .then(() => queryInterface.sequelize.query(`ALTER TABLE \`${constants.TABLES.movies}\` CONVERT TO CHARACTER SET \`utf8\` COLLATE \`utf8_unicode_ci\`;`)),
    down: queryInterface => queryInterface.dropTable(constants.TABLES.movies),
};

