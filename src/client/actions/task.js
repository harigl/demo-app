import * as ACTIONS from '../constants/actions'
import axios from '../axios'

export const loadMyTask = (order, orderMethod, page, limit) => {
	return {
		type: ACTIONS.LOAD_MY_TASK,
		payload: axios('get', 'tasks/assigned?order=' + order + '&orderMethod=' + orderMethod + '&page=' + page + '&limit=' + limit)
	}
}
