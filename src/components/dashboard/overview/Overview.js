// import node module libraries
import React from 'react';
import { Col, Row, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components

// import sub components
import PopularInstructor from './PopularInstructor';
import RecentCourses from './RecentCourses';
import Activity from './Activity';



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

const ChartActionMenu = () => {
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-vertical text-muted"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<i className="fe fe-external-link dropdown-item-icon "></i> Export
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<i className="fe fe-mail dropdown-item-icon "></i> Email Report
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-download dropdown-item-icon "></i> Download
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

const Overview = () => {
	return (
		<div>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
						<div className="mb-3 mb-lg-0">
							<h1 className="mb-0 h2 fw-bold">Dashboard</h1>
						</div>
						<div className="d-flex">
							<div className="input-group me-3  ">
								
								<span className="input-group-text text-muted" id="basic-addon2">
									<i className="fe fe-calendar"></i>
								</span>
							</div>
							<Link to="#" className="btn btn-primary">
								Setting
							</Link>
						</div>
					</div>
				</Col>
			</Row>
			

			<Row>
				<Col xl={8} lg={12} md={12} className="mb-4">
					<Card>
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0">Earnings</h4>
							</div>
							<div>
								<ChartActionMenu />
							</div>
						</Card.Header>
						<Card.Body>
							
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} lg={12} md={12} className="mb-4">
					<Card>
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0">Traffic</h4>
							</div>
							<div>
								<ChartActionMenu />
							</div>
						</Card.Header>
						<Card.Body className="py-lg-7">
							<div id="chart">
							
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row>
				<Col xl={4} lg={6} md={12} className="mb-4">
					<PopularInstructor title="Popular Instructor" />
				</Col>
				<Col xl={4} lg={6} md={12} className="mb-4">
					<RecentCourses title="Recent Courses" />
				</Col>

				<Col xl={4} lg={6} md={12} className="mb-4">
					<Activity title="Activity" />
				</Col>
			</Row>
		</div>
	);
};

export default Overview;
