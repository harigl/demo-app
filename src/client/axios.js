import axios from 'axios'
import store from './store'
import config from './config'
import AccessToken from './helpers/token'

const getHeaders = () => {
  let headers = {}
  if (store.getState() && store.getState().user && store.getState().user.accessToken) {
    const token = store.getState().user.accessToken
    headers.authorization = token ? `Bearer ${token}` : null
  }
  return headers
}

export default (method, url, data) => {
  return axios({
    method,
    headers: getHeaders(),
    url: `${config.api.url}/${url}`,
    data
  }).catch(({ response }) => {
    if (response && response.status === 500) {
      AccessToken.set('')
      window.location.href = '/login'
    }
  })
}
