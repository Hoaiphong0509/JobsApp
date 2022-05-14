require('dotenv').config()

module.exports = {
  DB: process.env.APP_DB,
  SECRET: process.env.APP_SECRET,
  TOKEN_EXPRIRES: process.env.TOKEN_EXPRIRES
}
