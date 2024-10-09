// import node module libraries
import React, { Fragment, useState } from 'react';
import { Col, Row, Breadcrumb, Form, Offcanvas, Button } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import sub components
import ProjectCard from './ProjectCard';
import OffcanvasCreateProjectForm from '../OffcanvasCreateProjectForm';

// import data files
const ProjectGrid = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const filterOptions = [
		{ value: 'In Progress', label: 'In Progress' },
		{ value: 'Pending', label: 'Pending' },
		{ value: 'Modified', label: 'Modified' },
		{ value: 'Finished', label: 'Finished' },
		{ value: 'Cancel', label: 'Cancel' }
	];

	

	// paging start
	const [pageNumber, setPageNumber] = useState(0);
	const projectsPerPage = 400;
	const pagesVisited = pageNumber * projectsPerPage;

	const displayProjects = ProjectsList.slice(
		pagesVisited,
		pagesVisited + projectsPerPage
	).map((item, index) => {
		return (
			<Col xxl={3} xl={4} lg={6} xs={12} className="mb-4" key={index}>
				<ProjectCard item={item} />
			</Col>
		);
	});
	// end of paging

	// searching code started
	const [searchTerm, setSearchTerm] = useState('');


	// end of searching code

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Projects</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Project</Breadcrumb.Item>
								<Breadcrumb.Item active>Grid</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Button onClick={handleShow}>Create a Project</Button>
							<Offcanvas
								show={show}
								onHide={handleClose}
								placement="end"
								name="end"
								style={{ width: '600px' }}
							>
								<Offcanvas.Header closeButton>
									<Offcanvas.Title as="h3">Create Project</Offcanvas.Title>
								</Offcanvas.Header>
								<Offcanvas.Body className="pt-0">
									<OffcanvasCreateProjectForm onClick={handleClose} />
								</Offcanvas.Body>
							</Offcanvas>
						</div>
					</div>
				</Col>
			</Row>

			<Row className="justify-content-md-between mb-4 mb-xl-0 ">
				<Col xl={2} lg={4} md={6} xs={12}>
					{/* search records */}
					<div className="mb-2 mb-lg-4">
						<Form.Control
							type="search"
							placeholder="Search by project name"
							value={searchTerm}
							onChange={getSearchTerm}
						/>
					</div>
				</Col>
				<Col xxl={2} lg={2} md={6} xs={12}>
					{/* records filtering options */}
					<Form.Control
						as={FormSelect}
						placeholder="Filter"
						options={filterOptions}
						onChange={getFilterTerm}
					/>
				</Col>
			</Row>

			{/* displaying records */}
			<Row>
				{displayProjects.length > 0 ? (
					displayProjects
				) : (
					<Col>No matching projects found.</Col>
				)}
			</Row>
		</Fragment>
	);
};

export default ProjectGrid;
