const express = require("express")
const router = express.Router()
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const storyController = require("../controllers/storyController");
/**
 * App Routes
 */

router.get('/', storyController.homepage);
router.post('/register', storyController.registerUser);
router.post('/login', storyController.loginUser);
router.put('/:id', storyController.updateUser);
router.delete('/:id', storyController.deleteUser);

module.exports = router;