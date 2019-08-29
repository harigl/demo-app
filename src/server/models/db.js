const Sequelize = require('sequelize')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({
	path: path.join(__dirname + '../', '.env')
})
const config = require('../config')

const db = new Sequelize(config.MYSQL.DB, config.MYSQL.USERNAME, config.MYSQL.PASSWORD, {
	host: config.MYSQL.HOST,
	port: config.MYSQL.PORT,
	dialect: 'mysql',
	query: { raw: true },
	define: {
		freezeTableName: true
	}
})

module.exports = db
