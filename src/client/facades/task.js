import createPromisifiedFacade from 'facade-tools/lib/createPromisifiedFacade'

const initialState = {
	tasks: null,
	page: 1,
	totalTasks: 0
}

export default createPromisifiedFacade((mergeWith) => {
	return {
		loadTask(taskResponse) {
			mergeWith(({ task, currenPage, totalTasks }) => {
				if (taskResponse && taskResponse.tasks) {
					return { tasks: taskResponse.tasks, page: taskResponse.page, totalTasks: taskResponse.totalTasks }
				}
			})
			return this
		}
	}
}, initialState)
