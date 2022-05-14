const bcrypt = require('bcryptjs')
const User = require('../models/User')
const signJWT = require('../utils/signJWT')

const register = async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await User.findOne({ email })
    
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }
    
    user = new User({
      email,
      password
    })
    
    console.log('REU')
    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    await user.save()

    const token = await signJWT(user._id)

    res.json({ token })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

module.exports = { register }
