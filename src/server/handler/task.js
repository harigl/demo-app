const models = require('../models')()
const prepareOffset = require('../helpers/prepareOffset')

const getMyTask = async (req, res, next) => {
	const user = res.locals.user
	const { page, limit, order, orderMethod } = res.locals.params
	const pagination = prepareOffset(page, limit)
	let orderQuery = []
	orderQuery.push([order || 'created', orderMethod || 'DESC'])
	const tasks = await models.task.findAndCountAll({
		where: {
			personnel_id: user.personnel_id
		},
		order: orderQuery,
		offset: pagination.offset,
		limit: pagination.limit
	})
	const payload = { totalTasks: tasks.count || 0, page, perPage: pagination.limit, tasks: tasks.rows || [] }
	return res.locals.setPayload(200, payload)
}

module.exports = {
	getMyTask
}
