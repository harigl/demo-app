import cookie from 'js-cookie'
import moment from 'moment'
import { JWT_TOKEN } from '../constants/settings'

export default {
	get() {
		return cookie.get(JWT_TOKEN)
	},

	set(token, expires) {
		expires =
			expires && expires.length > 0
				? moment()
						.utc()
						.add(expires.slice(0, -1), expires.slice(-1))
				: moment()
						.utc()
						.add(1, 'h')

		cookie.set(JWT_TOKEN, token, { expires: expires.toDate() })
		return this
	},

	clear() {
		cookie.remove(JWT_TOKEN)
		return this
	}
}
