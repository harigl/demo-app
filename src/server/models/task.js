const Sequelize = require('sequelize')
const db = require('./db')

const TABLE_NAME = 'task'

const task = db.define(
	TABLE_NAME,
	{
		task_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		personnel_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'personnel',
				key: 'personnel_id'
			}
		},
		customer_first_name: Sequelize.STRING(100),
		customer_last_name: Sequelize.STRING(100),
		personnel_phone: Sequelize.STRING(50),
		agentId: Sequelize.INTEGER,
		task_status_name: Sequelize.STRING(50),
		created: Sequelize.DATE
	},
	{
		timestamps: false
	}
)

function taskModel() {
	return task
}

module.exports = taskModel
