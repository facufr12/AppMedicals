// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, ListGroup, Dropdown, Image } from 'react-bootstrap';

// import utility file
import { numberWithCommas } from 'helper/utils';


const PopularInstructor = ({ title }) => {
	// The forwardRef is important!!
	// Dropdown needs access to the DOM node in order to position the Menu
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=""
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			className="btn-icon btn btn-ghost btn-sm rounded-circle"
		>
			{children}
		</Link>
	));

	const ActionMenu = () => {
		return (
			<div>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle}>
						<i className="fe fe-more-vertical text-muted"></i>
					</Dropdown.Toggle>
					<Dropdown.Menu align="end">
						<Dropdown.Header>SETTINGS</Dropdown.Header>
						<Dropdown.Item eventKey="1">
							<i className="fe fe-edit dropdown-item-icon"></i> Edit
						</Dropdown.Item>
						<Dropdown.Item eventKey="2">
							<i className="fe fe-trash dropdown-item-icon"></i> Remove
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	};

	return (
		<Card className="h-100">
			<Card.Header className="d-flex align-items-center justify-content-between card-header-height">
				<h4 className="mb-0">{title}</h4>
				<Link to="#" className="btn btn-outline-secondary btn-sm">
					View all
				</Link>
			</Card.Header>
			
		</Card>
	);
};
export default PopularInstructor;
