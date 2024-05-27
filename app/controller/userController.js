const db = require("../model/db");
const Sequelize = require("sequelize");
const { use } = require("../route/route");
const userRole = db.userRole;
const userRight = db.userRight;
const userRoleRight = db.userRoleRight;
const user = db.user;
const sequelize = require("../model/db");

module.exports = {
    createUserRole: async (req, res, next) => {
        const { roleName, roleCode, roleDetail } = req.body;
        const createRole = await userRole.create(req.body);

        console.log("createRole-->", createRole);
        if (createRole) {
            return res.send(createRole);
        } else {
            return res.send("Role not created");
        }
    },

    createUserRight: async (req, res, next) => {
        const { roleName, roleCode, roleDetail } = req.body;
        const createRole = await userRight.create(req.body);

        console.log("createRole-->", createRole);
        if (createRole) {
            return res.send(createRole);
        } else {
            return res.send("Right not created");
        }
    },

    createUserRoleRight: async (req, res, next) => {
        console.log(req.body);

        const arr = [];
        for (let i = 0; i < req.body.userRight.length; i++) {
            arr.push({
                role_id: req.body.role_id,
                right_id: req.body.userRight[i].right_id,
                is_view: req.body.userRight[i].is_view,
                is_delete: req.body.userRight[i].is_delete,
                is_update: req.body.userRight[i].is_update,
                is_create: req.body.userRight[i].is_create,
                is_download: req.body.userRight[i].is_download,
            });
        }

        console.log("arr:-->", arr);

        const addRoleRight = await userRoleRight.bulkCreate(arr);

        if (addRoleRight) {
            return res.send(addRoleRight);
        } else {
            return res.send("role right not added");
        }
    },

    createUser: async (req, res, next) => {
        const addUser = await user.create(req.body);

        if (addUser) {
            return res.send(addUser);
        } else {
            return res.send("user not added");
        }
    },

    updateUser: async (req, res, next) => {
        const { userId } = req.query;
        const { roleId } = req.body;
        const [updateUser] = await user.update(
            { roleId },
            {
                where: { id: userId },
            }
        );

        if (updateUser > 0) {
            return res.send({ updateUser });
        } else {
            return res.send("user not found ");
        }
    },
    getUserRoleRight: async (req, res) => {
        const { userId } = req.query;
        let id = parseInt(userId, 10)
        const qry = `SELECT 
        user.id,
        user.username,
        user_role_right.is_view,
        user_role_right.is_delete,
        user_role_right.is_create,
        user_role_right.is_update,
        user_role_right.is_download,
        user_role.roleName,
        user_role.roleCode,
        user_role.roleDetail,
        user_right.pageName,
        user_right.pageUrl,
        user_right.displayName,
        user_right.is_menu
      FROM
        USER
      LEFT JOIN
        user_role_right ON user.roleId = user_role_right.role_id
      LEFT JOIN
        user_role ON user_role_right.role_id = user_role.id
      LEFT JOIN
        user_right ON user_role_right.right_id = user_right.id
      WHERE
        user.id = ${id}`;


        const [results, metadata] = await sequelize.query(qry);

        console.log(
            "metadata-->", metadata
        )
        console.log(results);

        if (results) {
            return res.send(results)
        } else {
            return res.send('user not found')
        }
    },
};
