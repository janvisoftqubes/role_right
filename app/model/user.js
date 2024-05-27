
module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            roleId: {
                type: Sequelize.STRING(50),
                allowNull: true,
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


    return user;
};