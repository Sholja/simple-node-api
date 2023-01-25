const constants = require('../../sequelize-constants');

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface
            .createTable(constants.TABLES.actors, {
                actor_id: {
                    field: constants.PRIMARY_KEYS.actors,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.BIGINT.UNSIGNED,
                },
                first_name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                last_name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                image: {
                    type: Sequelize.STRING,
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
            .then(() => queryInterface.sequelize.query(`ALTER TABLE \`${constants.TABLES.actors}\` CONVERT TO CHARACTER SET \`utf8\` COLLATE \`utf8_unicode_ci\`;`)),
    down: queryInterface => queryInterface.dropTable(constants.TABLES.actors),
};

