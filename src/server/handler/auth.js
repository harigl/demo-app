const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const passport = require('../lib/passport')
const models = require('../models')()

const login = async (req, res, next) => {
	let { phone, password } = res.locals.params
	let user = await models.personnel.findOne({
		where: {
			personnel_phone: phone
		}
	})
	if (user) {
		const isValidPassword = await bcrypt.compare(password, user.personnel_password)
		if (isValidPassword) {
			delete user.personnel_password
			const expiresIn = res.locals.config.jwt.expiresIn
			const accessToken = jwt.sign({ ...user, id: user.personnel_id }, res.locals.config.jwt.secret, { expiresIn })
			return res.locals.setPayload(200, { reset_password: user.resetPassword, accessToken, expires_in: expiresIn })
		} else {
			return res.locals.setPayload(200, {
				error: { password: 'You have entered an incorrect password' }
			})
		}
	} else {
		return res.locals.setPayload(200, {
			error: { phone: 'User not exist' }
		})
	}
}

const sessionCheck = (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (err, user) => {
		if (!user || err) {
			res.locals.setPayload(500, { message: 'userNotExist' })
		} else {
			res.locals.user = user
			next()
		}
	})(req, res, next)
}

module.exports = {
	login,
	sessionCheck
}
