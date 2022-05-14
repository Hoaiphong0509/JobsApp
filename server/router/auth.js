const express = require('express')
const router = express.Router()
const authorize = require('../middleware/authorize')

const authController = require('../controllers/Auth')

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', authorize(), authController.getUserByToken)

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', authController.login)

module.exports = router
