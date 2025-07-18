// routes/user.routes.js
const express = require('express');
const { login, logout, register, updateProfile } = require("../controllers/user.controller.js");
const isAuthenticated = require("../middlewares/auth.js");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);

module.exports = router;
