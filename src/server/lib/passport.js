const passport = require('passport')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({
	path: path.join(__dirname + '../', '.env')
})
const config = require('../config')
const jwtStrategry = require('./strategies/jwt')
passport.use(jwtStrategry(config))

module.exports = passport
