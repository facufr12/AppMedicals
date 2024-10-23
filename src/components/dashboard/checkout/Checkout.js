// import node module libraries
import { useState } from 'react';
import { Col, Row, Breadcrumb } from 'react-bootstrap';
import { FaUser, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa'; // Importa los íconos

// import sub components ( Steps )
import BillingInformation from './steps/BillingInformation';
import PaymentSelection from './steps/PaymentSelection';
import ShippingInformation from './steps/ShippingInformation';
import OrderSummary from './OrderSummary';

// import custom components
import GKStepper3 from 'components/elements/stepper/GKStepper3';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState();
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData);
  };

  const next = () => {
    setCurrentStep(currentStep === 3 ? 1 : currentStep + 1); // Cambié 4 por 3
  };

  const previous = () => {
    setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
  };

  const steps = [
    {
      id: 1,
      title: 'Datos de Afiliación',
      icon: <FaUser />, // Ícono para Datos de Afiliación
      content: (
        <BillingInformation data={formData} handleChange={handleChange} next={next} />
      )
    },
    {
      id: 2,
      title: 'Declaración de Salud',
      icon: <FaClipboardCheck />, // Ícono para Declaración de Salud
      content: (
        <ShippingInformation
          data={formData}
          handleChange={handleChange}
          next={next}
          previous={previous}
        />
      )
    },
    {
      id: 3,
      title: 'Confirmación',
      icon: <FaCheckCircle />, // Ícono para Confirmación
      content: (
        <PaymentSelection
          data={formData}
          handleChange={handleChange}
          next={next}
          previous={previous}
        />
      )
    }
  ];

  return (
    <div>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <div className="border-bottom pb-3 mb-3 ">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold"> Checkout </h1>
              <Breadcrumb>
                <Breadcrumb.Item to="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item to="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={7} xl={8}>
          <div id="stepperForm" className="bs-stepper">
            <Row>
              <div>
                {/* Stepper Button and content */}
                <GKStepper3 currentStep={currentStep} steps={steps} />
              </div>
            </Row>
          </div>
        </Col>
        <Col xl={4} lg={5}>
          <OrderSummary />
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
