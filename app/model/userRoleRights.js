
module.exports = (sequelize, Sequelize) => {
    const userRoleRight = sequelize.define(
        'user_role_right',
        {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
            },
            role_id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            right_id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            is_view: {
                type: Sequelize.BOOLEAN(1),
                allowNull: false,
            },
            is_create: {
                type: Sequelize.BOOLEAN(1),
                allowNull: false,
            },
            is_update: {
                type: Sequelize.BOOLEAN(1),
                allowNull: false,
            },
            is_delete: {
                type: Sequelize.BOOLEAN(1),
                allowNull: false,
            },
            is_download: {
                type: Sequelize.BOOLEAN(1),
                allowNull: false,
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

    return userRoleRight;
};