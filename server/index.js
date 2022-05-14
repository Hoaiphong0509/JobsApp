const express = require('express')
const connectDB = require('./utils/db')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

//Connect DB
connectDB()

app.use(cors())
app.use(bodyParser.json())

//Define route
app.use('/api/auth', require('./router/auth'))
app.use('/api/user', require('./router/user'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🔥🔥🔥`)
})
