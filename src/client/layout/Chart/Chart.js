import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

export default function TaskList({ action, limit, orderMethod, order }) {
	return (
		<Card>
			<CardBody style={{ minHeight: 410 }}>
				<CardTitle tag="h5">Daily Target</CardTitle>
				<CardText>Work in progress.</CardText>
			</CardBody>
		</Card>
	)
}
