const userService = require('../services/userService');

class UserController {
  getAllUsers(req, res) {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  }

  createUser(req, res) {
    const { name, age, job_title, company } = req.body;
    const newUser = userService.createUser(name, age, job_title, company);

    const result = {
      status: "Success",
      message: "New user added successfully",
      data: newUser
    }
    res.status(201).json(result);
  }
}

module.exports = new UserController();