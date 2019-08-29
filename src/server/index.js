const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

dotenv.config({
  path: path.join(__dirname, '.env')
})
const config = require('./config')
const router = require('./middleware/routes')
const restful = require('./middleware/restful')

const app = express()

app.use(morgan('dev'))

// cors
app.use(
  cors({
    origin: function(origin, callback) {
      console.log(origin)
      if (config.corsDomain.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })
)
// use body parser to parse json body
app.use(bodyParser.json())

// helper methods to handle payload, body and status
app.use(restful(config))

// setup routes
app.use(router())

// Start the server
app.listen(config.port, () => {
  console.log(`Listening on ${config.port}`)
})
