// import node module libraries
import { Row, Col, Card } from 'react-bootstrap';

// import custom components

const BudgetSection = () => {
	return (
		<Card>
			<Card.Header className="card-header">
				<h4 className="mb-0">Budget </h4>
			</Card.Header>
			<Row>
				<Col lg={4} md={12} xs={12}>
					
				</Col>
				<Col lg={4} md={12} xs={12} className="border-start-md">
					
				</Col>
				<Col lg={4} md={12} xs={12} className="border-start-md">
					
				</Col>
			</Row>
		</Card>
	);
};
export default BudgetSection;
