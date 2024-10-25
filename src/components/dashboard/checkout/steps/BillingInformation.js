// import node module libraries
import { Row, Col, Form, Button } from 'react-bootstrap';

// import custom components
import FormSelect from 'components/elements/form-select/FormSelect';

const BillingInformation = (props) => {
	const { next } = props;

	const countryOptions = [
		{ value: 'India', label: 'India' },
		{ value: 'UK', label: 'UK' },
		{ value: 'US', label: 'US' }
	];
	return (
		<Form>
			<div className="bs-stepper-content">
				{/* Content one */}
				<div role="tabpanel" className="bs-stepper-pane active dstepper-block">
					{/* heading */}
					
					<Row className="gx-3">
						<Col md={6} className="mb-3">
							{/* First Name */}
							<Form.Label htmlFor="firstname">Número de Póliza</Form.Label>
							<Form.Control type="text" id="firstname" placeholder="Número de póliza" />
						</Col>
						<div className="mb-5">
						<h3 className="mb-1">Datos Personales del Titular</h3>
					</div>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Nombre</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Ingresar nombre" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Apellido</Form.Label>
							<Form.Control type="email" id="email" placeholder="Ingresar apellido" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Fecha de Nacimiento</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Ingresar Fecha de nacimiento" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Documento</Form.Label>
							<Form.Control type="email" id="email" placeholder="Ingresar documento" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Correo</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Ingresar correo" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Celular</Form.Label>
							<Form.Control type="email" id="email" placeholder="Ingresar celular" />
						</Col>
					
						<Col xs={12} className="mb-3">
							{/* Address */}
							<Form.Label htmlFor="address">Dirección</Form.Label>
							<Form.Control type="text" placeholder="Ingresar direccion" id="address" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Town / City */}
							<Form.Label htmlFor="town">Localidad</Form.Label>
							<Form.Control type="text" placeholder="Ingresar localidad" id="town" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* State */}
							<Form.Label htmlFor="state">State</Form.Label>
							<Form.Control type="text" placeholder="Enter State" id="state" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Zip / Postal Code */}
							<Form.Label htmlFor="zip">Código Postal</Form.Label>
							<Form.Control type="text" placeholder="Ingresar código postal" id="zip" />
						</Col>
					
						<Col md={6} className="mb-3">
							{/* First Name */}
							<Form.Label htmlFor="firstname">Número de Póliza</Form.Label>
							<Form.Control type="text" id="firstname" placeholder="Número de póliza" />
						</Col>
						<div className="mb-5">
						<h3 className="mb-1">Datos Personales del Grupo Familiar</h3>
					</div>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Nombre</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Ingresar nombre" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Apellido</Form.Label>
							<Form.Control type="email" id="email" placeholder="Ingresar apellido" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Fecha de Nacimiento</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Ingresar Fecha de nacimiento" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Documento</Form.Label>
							<Form.Control type="email" id="email" placeholder="Ingresar documento" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Correo</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Ingresar correo" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Celular</Form.Label>
							<Form.Control type="email" id="email" placeholder="Ingresar celular" />
						</Col>
					
						<Col xs={12} className="mb-3">
							{/* Address */}
							<Form.Label htmlFor="address">Dirección</Form.Label>
							<Form.Control type="text" placeholder="Ingresar direccion" id="address" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Town / City */}
							<Form.Label htmlFor="town">Localidad</Form.Label>
							<Form.Control type="text" placeholder="Ingresar localidad" id="town" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* State */}
							<Form.Label htmlFor="state">State</Form.Label>
							<Form.Control type="text" placeholder="Enter State" id="state" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Zip / Postal Code */}
							<Form.Label htmlFor="zip">Código Postal</Form.Label>
							<Form.Control type="text" placeholder="Ingresar código postal" id="zip" />
						</Col>
					
					</Row>

					{/* Button */}
					<div className="d-flex justify-content-end">
						<Button variant="primary" onClick={next}>
							Avanzar a "Declaración de Salud" <i className="fe fe-shopping-bag ms-1"></i>
						</Button>
					</div>
				</div>
			</div>
		</Form>
	);
};
export default BillingInformation;
