import * as ACTIONS from '../constants/actions'
import axios from '../axios'

export const login = (data) => {
  return {
    type: ACTIONS.LOGIN,
    payload: axios('post', 'personnel/login', data)
  }
}

