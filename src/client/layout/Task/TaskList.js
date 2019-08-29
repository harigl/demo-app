import React from 'react'
import { Table, Card, CardBody, CardTitle, CardFooter } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from './../../components/base/Pagination'
import Loader from './../../components/base/Loader'
import TaskItem from './TaskItem'

export default function TaskList({ action, limit, orderMethod, order }) {
	const dispatch = useDispatch()
	const myTasks = useSelector((state) => state.task.tasks)
	const isPending = useSelector((state) => state.task.pending)
	const page = useSelector((state) => state.task.page)
	const total = useSelector((state) => state.task.totalTasks)
	const loadTaskByPage = (page) => {
		dispatch(action(order, orderMethod, page, limit))
	}
	if (myTasks === null && !isPending) {
		loadTaskByPage(1)
	}

	const taskContent = (myTasks || []).map(function(task, index) {
		let counter = (page - 1) * 5 + index + 1
		return (
			<TaskItem
				{...{ ...task, firstName: task.customer_first_name, lastName: task.customer_last_name, phone: task.customer_phone, status: task.task_status_name, counter, key: index }}
			/>
		)
	})
	return (
		<Card>
			<CardBody style={{ minHeight: 410 }}>
				<CardTitle tag="h5">Tasks</CardTitle>
				{isPending && <Loader {...{ top: '10%' }} />}
				{!isPending &&
					myTasks &&
					myTasks.length > 0 && (
						<Table bordered striped responsive>
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Phone</th>
									<th>Registration</th>
									<th>Status</th>
									<th>Created</th>
									<th colSpan="2">Actions</th>
								</tr>
							</thead>
							<tbody>{taskContent}</tbody>
						</Table>
					)}
			</CardBody>
			<CardFooter className="text-muted">
				{total > page && <Pagination {...{ totalPage: total, selectedPage: page, onPageChange: loadTaskByPage, isDisabled: isPending, itemPerPage: limit }} />}
			</CardFooter>
		</Card>
	)
}
