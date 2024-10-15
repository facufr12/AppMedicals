import React from "react";
import { Card, ListGroup, Dropdown } from "react-bootstrap";
import { Calendar4, Clock, CurrencyDollar } from "react-bootstrap-icons";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    ref={ref}
    href=""
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const ProjectSummary = ({ prospecto }) => {
  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <i className="fe fe-more-vertical text-muted"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>Settings</Dropdown.Header>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Card>
      <Card.Header className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Resumen del Prospecto</h4>
          <ActionMenu />
        </div>
      </Card.Header>
      <Card.Body>
        <p>
          <strong>Nombre:</strong> {nombre}
        </p>
        <p>
          <strong>Partido:</strong> {partido || "SIN PARTIDO"}
        </p>
        <p>
          <strong>Fecha de Ingreso:</strong> {new Date(fecha).toLocaleDateString()}
        </p>
        
        <ListGroup variant="flush">
          <ListGroup.Item className="px-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Calendar4 size={16} className="text-primary" />
                <div className="ms-2">
                  <h5 className="mb-0 text-body">Start Date</h5>
                </div>
              </div>
              <p className="text-dark mb-0 fw-semi-bold">01 Jan, 2021</p>
            </div>
          </ListGroup.Item>
          {/* Más ListGroup.Items según sea necesario */}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ProjectSummary;
