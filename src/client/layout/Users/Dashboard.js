import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MyTask from '../Task/MyTask'
import Chart from '../Chart/Chart'

export default function Dashboard() {
	return (
		<Container fluid={true}>
			<Row>
				<Col sm="8">
					<MyTask {...{ limit: 5, order: 'created', orderMethod: 'DESC' }} />
				</Col>
				<Col sm="4">
					<Chart />
				</Col>
			</Row>
		</Container>
	)
}
