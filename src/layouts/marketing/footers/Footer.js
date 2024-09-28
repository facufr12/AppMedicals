// import node module libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = ({ bgColor = 'bg-transparent' }) => {
	return (
		<footer className={`footer ${bgColor}`}>
			<Container>
				<Row className="align-items-center g-0 border-top py-2">
					{/* Desc */}
					<Col md={6} sm={12} className="text-center text-md-start">
						<span>© 2024 Cober. Todos los derechos Reservados.</span>
					</Col>
					{/* Links */}
			
				</Row>
			</Container>
		</footer>
	);
};

// Typechecking With PropTypes
Footer.propTypes = {
	bgColor: PropTypes.string
};

export default Footer;
