const express = require("express");
const router = express.Router();
const { createUserRole, createUserRight, createUserRoleRight, createUser, updateUser, getUserRoleRight } = require("../../controller/userController");

router.post("/create-role", createUserRole);

router.post("/create-right", createUserRight);

router.post("/create-role-right", createUserRoleRight);

router.post("/create-user", createUser);

router.post("/update-user", updateUser);

router.post("/get-user-role-right", getUserRoleRight);


module.exports = router;
