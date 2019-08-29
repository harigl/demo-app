const Sequelize = require('sequelize')
const db = require('./db')

const TABLE_NAME = 'personnel'

const personnel = db.define(
	TABLE_NAME,
	{
		personnel_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		personnel_fname: Sequelize.STRING(20),
		personnel_email: Sequelize.STRING(45),
		personnel_phone: Sequelize.STRING(45),
		personnel_password: Sequelize.STRING(100),
		reset_password: Sequelize.BOOLEAN
	},
	{
		timestamps: false
	}
)

const personnelModel = () => {
	return personnel
}

module.exports = personnelModel
