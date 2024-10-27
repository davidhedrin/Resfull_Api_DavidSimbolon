const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Server is running now');
});
router.get('/get-users', userController.getAllUsers);
router.post('/add-user', userController.createUser);

module.exports = router;