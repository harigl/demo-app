import typeToReducer from 'type-to-reducer'
import { ActionType } from 'redux-promise-middleware'
import * as ACTIONS from '../constants/actions'

import TaskFacade from '../facades/task'

export default typeToReducer(
  {
    [ACTIONS.LOAD_MY_TASK]: {
      [ActionType.Pending](state, { payload }) {
        return TaskFacade(state)
          .loadTask()
          .startLoading()
          .get()
      },
      [ActionType.Fulfilled](state, { payload }) {
        const { data } = payload
        return TaskFacade(state)
          .loadTask(data)
          .finishLoading()
          .get()
      },
      [ActionType.Rejected](state, { payload }) {
        return TaskFacade(state)
          .loadTask({ tasks: [] })
          .finishLoading()
          .get()
      }
    }
  },
  TaskFacade().get()
)
