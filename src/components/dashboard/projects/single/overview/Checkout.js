// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Form, Button, Card } from 'react-bootstrap';

const SMTPServer = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 font-weight-bold">SMTP Server Setting</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
								<Breadcrumb.Item active>SMTP Server Setting</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
				</Col>
			</Row>

			<Card>
				<Card.Header>
					<h2 className="mb-0">SMTP Server Setting</h2>
				</Card.Header>
				<Card.Body>
					<Form>
						<Row>
							<Col lg={6} md={12} className="mb-3">
								{/* Name */}
								<Form.Label>Numero de Póliza </Form.Label>
								<Form.Control
									type="text"
									id="senderName"
									placeholder="Ingrese numero de la Póliza"
									required
								/>
							</Col>
                            <Card.Header>
					<h2 className="mb-0">Datos Personales del Titular</h2>
				</Card.Header>
							<Col lg={6} md={12} className="mb-3">
								{/* Address */}
								<Form.Label>
									Nombre <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="address"
									placeholder="Ingresar Nombre"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Mail driver */}
								<Form.Label>
									Apellido<span className="text-danger">*</span>{' '}
								</Form.Label>
								<Form.Control
									type="text"
									id="mailDriver"
									placeholder="Ingresar Apellido"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Username */}
								<Form.Label>
									Fecha de Nacimiento<span className="text-danger">*</span>{' '}
									(info@geeksuidesign.com)
								</Form.Label>
								<Form.Control
									type="text"
									id="userName"
									placeholder="e.g.smtp,gmail.com"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Host */}
								<Form.Label>
									Documento<span className="text-danger">*</span>{' '}
								</Form.Label>
								<Form.Control
									type="text"
									id="mailHost"
									placeholder="Ingresar Documento"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Password */}
								<Form.Label>
									Correo<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="email"
									id="mailPassword"
									placeholder="Ingresar Correo"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Port Number */}
								<Form.Label>
									Celular<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailPort"
									placeholder="Ingresar Celular"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Encryption */}
								<Form.Label>Dirección</Form.Label>
								<Form.Control
									type="passwird"
									id="mailEncryption"
									placeholder="Ingresar Dirección"
									required
								/>
							</Col>
                            <Col lg={6} md={12} className="mb-3">
								{/* Name */}
								<Form.Label>Numero de Póliza </Form.Label>
								<Form.Control
									type="text"
									id="senderName"
									placeholder="Ingrese numero de la Póliza"
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col lg={6} md={12}>
								<Button variant="primary" type="submit">
									Submit{' '}
								</Button>{' '}
								<Button variant="outline-secondary" type="submit">
									Cancel{' '}
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default SMTPServer;