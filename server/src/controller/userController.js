const userService = require("../service/userService");

const create = async (request, response) => {
  const userPayload = request.body;
  return await userService.create(userPayload);
};

module.exports = {
  create,
};
