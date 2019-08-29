import createPromisifiedFacade from 'facade-tools/lib/createPromisifiedFacade'
import AccessToken from '../helpers/token'

const initialState = {
	accessToken: AccessToken.get(),
	message: null
}

export default createPromisifiedFacade((mergeWith) => {
	return {
		login(loginResponse) {
			mergeWith(({ accessToken, error }) => {
				if (loginResponse && loginResponse.accessToken) {
					AccessToken.set(loginResponse.accessToken, loginResponse.expires_in)
					return { accessToken: loginResponse.accessToken }
				} else if (loginResponse && loginResponse.error) {
					return { message: loginResponse.error }
				}
			})
			return this
		},
		logout() {
			mergeWith(() => {
				AccessToken.set('')
				window.location.href = '/login'
				return
			})
			return this
		}
	}
}, initialState)
