import store from '../store'

const getToken = () => {
	return store.getState().user.accessToken
}

export default getToken
