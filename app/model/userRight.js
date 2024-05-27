
module.exports = (sequelize, Sequelize) => {
    const userRight = sequelize.define(
        'user_right',
        {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
            },
            pageName: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            moduleName: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },

            pageUrl: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            displayName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            is_menu: {
                type: Sequelize.BOOLEAN(1),
                allowNull: true,
                defaultValue: true,
            },
            is_active: {
                type: Sequelize.BOOLEAN(1),
                allowNull: true,
                defaultValue: true,
            },
            created_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
            },
            updated_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
            },
        },
        { freezeTableName: true, timestamps: false },
    );


    return userRight;
};