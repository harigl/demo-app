const _ = require('lodash')

const getParams = (req) => {
	const body = req.body
	const params = req.query
	return _.merge(body, params)
}

const setPayload = (res) => {
	return (status, message) => {
		return res.status(status).json(message)
	}
}

const restful = (config) => {
	return async (req, res, next) => {
		res.locals.config = config
		res.locals.params = getParams(req)
		res.locals.setPayload = setPayload(res)
		next()
	}
}

module.exports = restful
