import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import Logo from 'assets/images/brand/logo/logo-cober.svg';

import Overview from '../../dashboard/overview/Overview';
const SignIn = () => {
	const navigate = useNavigate(); // Hook para navegar a otra ruta

	const handleSubmit = (event) => {
		event.preventDefault(); // Evita que el formulario se recargue
		// Aquí puedes agregar lógica de autenticación si es necesario

		// Redirige al componente "Overview"
		navigate('/Overview'); // Asegúrate de que la ruta esté bien definida en el router
	};

	return (
		<Fragment>
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card style={{ borderRadius: '40px' }}>
						<Card.Body className="p-6">
							<div className="mb-4 text-center">
								<Link to="/">
									<Image 
										src={Logo} 
										className="mb-4" 
										alt="" 
										style={{ width: '150px' }} 
									/>
								</Link>
								<h1 className="mb-1 fw-bold">Inicio de Sesión</h1>
								<span>
									¿No tenes acceso?{' '}
									<Link to="/authentication/sign-up" className="ms-1">
										Registrarse
									</Link>
								</span>
							</div>
							{/* Form */}
							<Form onSubmit={handleSubmit}>
								<Row>
									<Col lg={12} className="mb-3">
										<Form.Label>Email </Form.Label>
										<Form.Control
											type="email"
											id="email"
											placeholder="Email address here"
											required
										/>
									</Col>
									<Col lg={12} className="mb-3">
										<Form.Label>Contraseña </Form.Label>
										<Form.Control
											type="password"
											id="password"
											placeholder="**************"
											required
										/>
									</Col>
									<Col lg={12} className="mb-3">
										<div className="d-md-flex justify-content-between align-items-center">
											<Form.Group
												className="mb-3 mb-md-0"
												controlId="formBasicCheckbox"
											>
												<Form.Check type="checkbox" label="Recordar" />
											</Form.Group>
											<Link to="/authentication/forget-password">
												¿Olvidaste tu contraseña?
											</Link>
										</div>
									</Col>
									<Col lg={12} className="mb-0 d-grid gap-2">
										<Button variant="primary" type="submit">
											Iniciar Sesión
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default SignIn;
