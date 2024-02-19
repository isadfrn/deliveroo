const userRoute = require("./user.route");

const { Router } = require("express");

const route = Router();

route.use("/user", userRoute);

module.exports = route;
