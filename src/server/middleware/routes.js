const express = require('express')
const router = express.Router()
const handler = require('../handler')()
const passport = require('../lib/passport')
const asyncHandler = require('./asyncHandler')

const route = (models) => {
	/**
	 * Auth related API points
	 * - login
	 */
	router.post('/personnel/login', asyncHandler(handler.auth.login))
	/**
	 * Task related API points
	 * - /tasks/assigned
	 */
	router.get('/tasks/assigned', asyncHandler(handler.auth.sessionCheck), asyncHandler(handler.task.getMyTask))

	return router
}

module.exports = route
