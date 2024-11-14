import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, ListGroup, Dropdown, Modal, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa"; 
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
  const { prospecto } = location.state || {};

  const [showModal, setShowModal] = useState(false);
  const [comentario, setComentario] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleComentarioChange = (e) => setComentario(e.target.value);

  const enviarComentario = async () => {
    const data = {
      id: prospecto?.id || "", 
      vendedor: prospecto?.vendedor || "", 
      comentario
    };
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxNn3wU0BDPbf6laTTq3PCaq6N7SkyVIdrzrKZkWrUW0pzcHU0Ku-tMQiZVsl6pZBRSGA/exec?func=agregarComentario",
        {
          method: "POST",
        
          body: JSON.stringify(data),
        }
      );
  
      if (response.ok) {
        console.log("Comentario enviado correctamente");
        handleCloseModal();
      } else {
        console.error("Error al enviar el comentario:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  
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

  if (!prospecto) {
    return <p>No hay información de prospecto disponible.</p>;
  }

  const getWhatsAppLink = (number) => {
    const message = "Hola, Querías solicitar un asesor?."; 
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
              <textarea 
                className="form-control" 
                rows="5" 
                placeholder="Escribe tu comentario..." 
                value={comentario} 
                onChange={handleComentarioChange}
              ></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={enviarComentario}>
                Guardar Comentario
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectSummary;
