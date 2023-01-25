const constants = require('../../sequelize-constants');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface
            .createTable(constants.TABLES.genres, {
                genre_id: {
                    field: constants.PRIMARY_KEYS.genres,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.BIGINT.UNSIGNED,
                },
                name: {
                    type: Sequelize.STRING,
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
            .then(() => queryInterface.sequelize.query(`ALTER TABLE \`${constants.TABLES.genres}\` CONVERT TO CHARACTER SET \`utf8\` COLLATE \`utf8_unicode_ci\`;`)),
    down: queryInterface => queryInterface.dropTable(constants.TABLES.genres),
};

