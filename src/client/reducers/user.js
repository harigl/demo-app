import typeToReducer from 'type-to-reducer'
import { ActionType } from 'redux-promise-middleware'
import * as ACTIONS from '../constants/actions'

import UsersFacade from '../facades/users'

export default typeToReducer(
  {
    [ACTIONS.LOGIN]: {
      [ActionType.Pending](state, { payload }) {
        return UsersFacade(state)
          .login()
          .get()
      },
      [ActionType.Fulfilled](state, { payload }) {
        const { data } = payload
        return UsersFacade(state)
          .login(data)
          .finishLoading()
          .get()
      },
      [ActionType.Rejected](state, { payload }) {
        return UsersFacade(state)
          .login([])
          .finishLoading()
          .get()
      }
    }
  },
  UsersFacade().get()
)
