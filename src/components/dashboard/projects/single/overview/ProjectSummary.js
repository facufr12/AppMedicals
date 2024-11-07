import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, ListGroup, Dropdown, Modal, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa"; // Asegúrate de importar el ícono de WhatsApp
import { 
  BsPersonFill, 
  BsPersonVcardFill, 
  BsTelephoneFill, 
  BsHouseFill, 
  BsGeoAltFill, 
  BsFillEnvelopeOpenFill, 
  BsCreditCard2BackFill, 
  BsFillSendFill 
} from "react-icons/bs";

const ProjectSummary = () => {
  const location = useLocation();
  const { prospecto } = location.state || {}; // Obtener prospecto del estado

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-icon btn btn-ghost btn-sm rounded-circle"
    >
      {children}
    </Link>
  ));

  const ActionMenu = () => (
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

  // Comprobar si hay un prospecto
  if (!prospecto) {
    return <p>No hay información de prospecto disponible.</p>;
  }

  // Función para generar el enlace de WhatsApp
  const getWhatsAppLink = (number) => {
    const message = "Hola, Querías solicitar un asesor?."; // Mensaje por defecto
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h5 className="mb-4">
            En la siguiente pestaña se muestran los detalles del prospecto seleccionado
          </h5>
          <ListGroup variant="flush">
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsPersonFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Nombre</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">
                    {prospecto.nombre}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsPersonVcardFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Edad</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">{prospecto.edad}</p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsCreditCard2BackFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Tipo de Afiliación</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">
                    {prospecto.tAfiliacion}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsHouseFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Grupo Familiar</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">
                    {prospecto.gpFamiliar}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsTelephoneFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Celular</h5>
                  </div>
                </div>
                <div>
                  <a href={getWhatsAppLink(prospecto.cel)} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={20} className="text-success" />
                  </a>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGeoAltFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Partido</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">
                    {prospecto.partido}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsFillEnvelopeOpenFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Correo</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">
                    {prospecto.correo || "SIN CORREO"}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsFillSendFill size={16} className="text-primary" />
                  <div className="ms-2">
                    <h5 className="mb-0 text-body">Estado</h5>
                  </div>
                </div>
                <div>
                  <p className="text-dark mb-0 fw-semi-bold">
                    {prospecto.estado}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary" className="mt-4" onClick={handleShowModal}>
        Agregar Comentario
      </Button>

      {/* Modal de agregar comentario */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes agregar un formulario o un área de texto para agregar el comentario */}
          <textarea className="form-control" rows="5" placeholder="Escribe tu comentario..."></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Guardar Comentario
          </Button>
        </Modal.Footer>
      </Modal>
        </Card.Body>
        
      </Card>

      {/* Botón para abrir el modal */}
 
    </div>
  );
};

export default ProjectSummary;
