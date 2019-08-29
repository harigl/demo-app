import React from 'react'
import { loadMyTask } from './../../actions/task'
import TaskList from './TaskList'

export default function MyTask({ limit, orderMethod, order }) {
	return <TaskList {...{ action: loadMyTask, limit, orderMethod, order }} />
}
