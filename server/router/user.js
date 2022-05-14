const express = require('express')

const router = express.Router()

const userController = require('../controllers/User')

// @route    POST api/auth
// @desc     Register account
// @access   Public
router.post('/register', userController.register)

module.exports = router
