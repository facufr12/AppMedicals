// import node module libraries
import React from 'react';
import { Col, Row, Card, ListGroup, Image } from 'react-bootstrap';


const Activity = ({ title }) => {
	return (
		<Card className="h-100">
			<Card.Header className="d-flex align-items-center justify-content-between card-header-height">
				<h4 className="mb-0">{title}</h4>
			</Card.Header>
			<Card.Body>
			
			</Card.Body>
		</Card>
	);
};
export default Activity;
