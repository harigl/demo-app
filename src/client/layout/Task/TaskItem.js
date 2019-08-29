import React from 'react'
import StatusBadge from './../../components/base/StatusBadge'
import DateFormater from './../../components/base/DateFormater'
import { Button } from 'reactstrap'

export default function TaskItem({ counter, firstName, lastName, phone, agentId, status, created }) {
	return (
		<tr>
			<th scope="row">{counter}</th>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{phone}</td>
			<td>{agentId ? 'Agent' : 'Self'}</td>
			<td>
				<StatusBadge {...{ status }} />
			</td>
			<td>
				<DateFormater {...{ date: created }} />
			</td>
			<td>
				<Button color="success" size="sm">
					Update
				</Button>
			</td>
			<td>
				<Button color="danger" size="sm">
					Delete
				</Button>
			</td>
		</tr>
	)
}
