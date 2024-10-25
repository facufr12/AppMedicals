// import node module libraries
import InputMask from 'react-input-mask';
import { Card, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PaymentSelection = (props) => {
	const { previous } = props;
	const [termsAccepted, setTermsAccepted] = useState(false);

	const states = [
		{ value: 'CABA', label: 'CABA' },
		{ value: 'Zona Norte', label: 'Zona Norte' },
		{ value: 'Zona Oeste', label: 'Zona Oeste' },
		{ value: 'Zona Sur', label: 'Zona Sur' }
	];
	const paymentMethods = [
		{ value: 'Tajeta Crédito', label: 'Tajeta Crédito' },
		{ value: 'Tajeta Débito', label: 'Tajeta Débito' },
		{ value: 'Mercado Pago', label: 'Mercado Pago' },
	];

	const CardNumberInput = (props) => (
		<InputMask
			mask="9999-9999-9999-9999"
			placeholder="xxxx-xxxx-xxxx-xxxx"
			value={props.value}
			onChange={props.onChange}
			className="form-control bg-white px-4 py-2.1"
		>
			{(inputProps) => <input {...inputProps} type="tel" id={props.id} />}
		</InputMask>
	);

	const ExpiryDate = (props) => (
		<InputMask
			mask={props.mask}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			className="form-control bg-white px-4 py-2.1"
		>
			{(inputProps) => <input {...inputProps} type="tel" id={props.id} />}
		</InputMask>
	);

	return (
		<Form>
			<div className="bs-stepper-content">
				{/* Content three */}
				<div role="tabpanel" className="bs-stepper-pane ">
					{/* Card */}
					<div className="mb-5">
						<h3 className="mb-1">Domicilio y Datos de Facturación</h3>
					</div>

					{/* Dirección y número */}
					<Row className="mb-4">
						<Col md={6}>
							<Form.Group className="mb-3">
								<Form.Label htmlFor='direccion'>Dirección</Form.Label>
								<Form.Control type="text" placeholder="Ingresar dirección" id="direccion" />
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3">
								<Form.Label htmlFor='numero'>Número</Form.Label>
								<Form.Control type="text" placeholder="Ingresar número" id="numero" />
							</Form.Group>
						</Col>
					</Row>

					{/* Nombre y apellido */}
					<Row className="mb-4">
						<Col md={6}>
							<Form.Group className="mb-3">
								<Form.Label htmlFor='nombre'>Nombre</Form.Label>
								<Form.Control type="text" placeholder="Ingresar nombre" id="nombre" />
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3">
								<Form.Label htmlFor='apellido'>Apellido</Form.Label>
								<Form.Control type="text" placeholder="Ingresar apellido" id="apellido" />
							</Form.Group>
						</Col>
					</Row>

					{/* Localidad */}
					<Row className="mb-4">
						<Col xs={12}>
							<Form.Group className="mb-3">
								<Form.Label htmlFor='localidad'>Localidad</Form.Label>
								<Form.Control as="select" id="localidad">
									<option value="">Seleccione Localidad</option>
									{states.map(state => (
										<option key={state.value} value={state.value}>{state.label}</option>
									))}
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>

					{/* Método de Pago */}
					<Row className="mb-4">
						<Col xs={12}>
							<Form.Group className="mb-3">
								<Form.Label htmlFor='metodoPago'>Método de Pago</Form.Label>
								<Form.Control as="select" id="metodoPago">
									<option value="">Seleccione Método de Pago</option>
									{paymentMethods.map(method => (
										<option key={method.value} value={method.value}>{method.label}</option>
									))}
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>

					{/* Checkbox de aceptación de términos */}
					<Row className="mb-4">
						<Col xs={12}>
							<Form.Group>
								<Form.Check 
									type="checkbox" 
									id="terms" 
									label="ACEPTO los siguientes términos y condiciones: La presente cotización no implica aceptación como socio hasta que se complete la solicitud de ingreso y sea aprobada por el departamento comercial y auditoría médica. Sujeta a modificaciones sin previo aviso. Válida por 48 hs."
									checked={termsAccepted}
									onChange={() => setTermsAccepted(!termsAccepted)}
								/>
							</Form.Group>
						</Col>
					</Row>

					{/* Button */}
					<div className="d-flex justify-content-between mt-3">
						<Button variant='outline-primary' className="mb-2 mb-md-0" onClick={previous}>
						Declaración de Salud

						</Button>
						<Button disabled={!termsAccepted}>
							Confirmar Afiliación
						</Button>
					</div>
				</div>
			</div>
		</Form>
	);
};

export default PaymentSelection;
