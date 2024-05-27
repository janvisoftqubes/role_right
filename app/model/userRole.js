
module.exports = (sequelize, Sequelize) => {
    const userRole = sequelize.define(
        'user_role',
        {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
            },
            roleName: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            roleCode: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            roleDetail: {
                type: Sequelize.STRING(50),
                allowNull: false,
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

    return userRole;
};