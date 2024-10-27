const userRepository = require('../repositories/userRepository.js');
const User = require('../models/userModel.js');

class UserService {
  getAllUsers() {
    return userRepository.getAllUsers();
  }

  createUser(name, age, job_title, company) {
    const user = new User(name, age, job_title, company);
    return userRepository.addUser(user);
  }
}

module.exports = new UserService();