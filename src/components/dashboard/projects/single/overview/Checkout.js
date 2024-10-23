// Importa las librerías necesarias
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Form, Button, Card } from 'react-bootstrap';

const SMTPServer = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 font-weight-bold">Crear Póliza</h1>
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
					<h2 className="mb-0">Datos de Afiliación</h2>
				</Card.Header>
				<Card.Body>
					<Form>
						<Row>
							<Col lg={6} md={12} className="mb-3">
								{/* Numero de Póliza */}
								<Form.Label>Numero de Póliza</Form.Label>
								<Form.Control
									type="text"
									id="senderName"
									placeholder="Ingrese numero de la Póliza"
									required
								/>
							</Col>
						</Row>
						<Card.Header>
							<h2 className="mb-0">Datos Personales del Titular</h2>
						</Card.Header>
						<Row>
							<Col lg={6} md={12} className="mb-3">
								{/* Nombre */}
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
								{/* Apellido */}
								<Form.Label>
									Apellido <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailDriver"
									placeholder="Ingresar Apellido"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Fecha de Nacimiento */}
								<Form.Label>
									Fecha de Nacimiento <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="userName"
									placeholder="Ingresar Fecha de Nacimiento"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Documento */}
								<Form.Label>
									Documento <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailHost"
									placeholder="Ingresar Documento"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Correo */}
								<Form.Label>
									Correo <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="email"
									id="mailPassword"
									placeholder="Ingresar Correo"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Celular */}
								<Form.Label>
									Celular <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailPort"
									placeholder="Ingresar Celular"
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col md={12} className="mb-3">
								{/* Dirección */}
								<Form.Label>Dirección</Form.Label>
								<Form.Control
									type="text"
									id="mailEncryption"
									placeholder="Ingresar Dirección"
									required
									className="w-100"
								/>
							</Col>
						</Row>
						<Row>
							<Col md={12} className="mb-3">
								{/* Localidad */}
								<Form.Label>Localidad</Form.Label>
								<Form.Control
									type="text"
									id="localidad"
									placeholder="Ingrese Localidad"
									required
									className="w-100"
								/>
							</Col>
						</Row>
						<Row>
							<Col md={12} className="mb-3">
								{/* Código Postal */}
								<Form.Label>Código Postal</Form.Label>
								<Form.Control
									type="text"
									id="codigoPostal"
									placeholder="Ingrese Código Postal"
									required
									className="w-100"
								/>
							</Col>
						</Row>
						<Row>
							<Col lg={12} md={12} sm={12}>
								<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
									<div className="mb-3 mb-md-0">
										<h1 className="mb-1 h2 font-weight-bold">Datos Personales del Grupo Familiar</h1>
									</div>
								</div>
							</Col>
						</Row>
						{/* Repetir los inputs de Datos Personales del Titular */}
					
						<Row>
							<Col lg={6} md={12} className="mb-3">
								<Form.Label>
									Nombre <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="addressGroup"
									placeholder="Ingresar Nombre"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								<Form.Label>
									Apellido <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailDriverGroup"
									placeholder="Ingresar Apellido"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								<Form.Label>
									Fecha de Nacimiento <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="userNameGroup"
									placeholder="Ingresar Fecha de Nacimiento"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								<Form.Label>
									Documento <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailHostGroup"
									placeholder="Ingresar Documento"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								<Form.Label>
									Correo <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="email"
									id="mailPasswordGroup"
									placeholder="Ingresar Correo"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								<Form.Label>
									Celular <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailPortGroup"
									placeholder="Ingresar Celular"
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col md={12} className="mb-3">
								<Form.Label>Dirección</Form.Label>
								<Form.Control
									type="text"
									id="mailEncryptionGroup"
									placeholder="Ingresar Dirección"
									required
									className="w-100"
								/>
							</Col>
						</Row>
						<Row>
							<Col md={12} className="mb-3">
								<Form.Label>Localidad</Form.Label>
								<Form.Control
									type="text"
									id="localidadGroup"
									placeholder="Ingrese Localidad"
									required
									className="w-100"
								/>
							</Col>
						</Row>
						<Row>
							<Col md={12} className="mb-3">
								<Form.Label>Código Postal</Form.Label>
								<Form.Control
									type="text"
									id="codigoPostalGroup"
									placeholder="Ingrese Código Postal"
									required
									className="w-100"
								/>
							</Col>
						</Row>
						<Row>
							<Col lg={6} md={12}>
								<Button variant="primary" type="submit">
									Submit
								</Button>
								<Button variant="outline-secondary" type="button">
									Cancel
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
