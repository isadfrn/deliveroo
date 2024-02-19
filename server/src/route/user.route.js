const userController = require("../controller/userController");

const { Router } = require("express");
const userRoute = Router();

userRoute.post("/", userController.create);

module.exports = userRoute;
