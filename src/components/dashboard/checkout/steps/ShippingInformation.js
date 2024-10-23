// import node module libraries
import { useState } from 'react';
import {
	Row,
	Col,
	Card,
	Form,
	Button,
	Image,
	Modal
} from 'react-bootstrap';

// import custom components
import FormSelect from 'components/elements/form-select/FormSelect';

// import required media

const ShippingInformation = (props) => {
	const { next, previous } = props;
	const [modalShow, setModalShow] = useState(false);

	const countryOptions = [
		{ value: 'India', label: 'India' },
		{ value: 'UK', label: 'UK' },
		{ value: 'US', label: 'US' }
	];

	const AddNewAddressModal = (props) => {
		return (
			<Modal
				{...props}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<Row>
						{/* Form fields */}
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={props.onHide}>Close</Button>
					<Button onClick={props.onHide}>Save Changes</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	return (
		<Form>
			{/* Content for second tab */}
			<div className="bs-stepper-content">
				<div role="tabpanel" className="bs-stepper-pane">
					<div className="mb-5">
						<h3 className="mb-1">Shipping Information</h3>
						<p className="mb-0">Fill the form below in order to send you the orders invoice.</p>
					</div>
					<div className="d-flex justify-content-between align-items-center mb-2">
						<h4 className="mb-0">Saved Address</h4>
						<Button variant="secondary" onClick={() => setModalShow(true)}>
							Add new address
						</Button>
						<AddNewAddressModal show={modalShow} onHide={() => setModalShow(false)} />
					</div>
					<Row>
						{/* Saved addresses */}
					</Row>
					<div>
						<h4 className="mb-4">Shipping Method</h4>
						<Card className="card-bordered shadow-none mb-2">
							<Card.Body>
								<div className="d-flex">
									<Form.Check className="mb-2">
										<Form.Check.Input type="radio" name="shippingMethod" id="freeDelivery" />
										<Form.Check.Label className="ms-2 w-100"></Form.Check.Label>
									</Form.Check>
									<div className="">
										<h5 className="mb-1"> Free Delivery</h5>
										<span className="fs-6">Expected Delivery 3 to 5 Days</span>
									</div>
								</div>
							</Card.Body>
						</Card>
						<Card className="card-bordered shadow-none mb-2">
							<Card.Body>
								<div className="d-md-flex">
									<Form.Check className="mb-2">
										<Form.Check.Input type="radio" name="shippingMethod" id="DHLExpress" />
										<Form.Check.Label className="ms-2 w-100"></Form.Check.Label>
									</Form.Check>
									<div className="d-flex justify-content-between align-items-center w-100">
										<div className="d-flex align-items-start">
											<div className="ms-2">
												<h5 className="mb-1">DHL Express</h5>
												<p className="mb-0 fs-6">1 Day Delivery</p>
											</div>
										</div>
										<div><h3 className="mb-0">$8.99</h3></div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="d-md-flex justify-content-between mt-4">
						<Button variant='outline-primary' className="mb-2 mb-md-0" onClick={previous}>
							Back to Info
						</Button>
						<Button onClick={next}>
							Continue to Payment <i className="fe fe-credit-card ms-2"></i>
						</Button>
					</div>
				</div>
			</div>
		</Form>
	);
};

export default ShippingInformation;
