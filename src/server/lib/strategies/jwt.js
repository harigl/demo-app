const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = (config) => {
	return new JwtStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: config.jwt.secret }, (jwtPayload, done) => {
		if (jwtPayload && jwtPayload.id) {
			return done(null, jwtPayload)
		}
		return done(null, false)
	})
}
