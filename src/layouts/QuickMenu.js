// import node module libraries
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Dropdown, ListGroup, Modal, Button } from "react-bootstrap";

// import other components
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import DotBadge from "components/elements/bootstrap/DotBadge";
import DarkLightMode from "layouts/DarkLightMode";
import GKTippy from "components/elements/tooltips/GKTippy";

// import data files
import NotificationList from "data/Notification";

const QuickMenu = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  const [showModal, setShowModal] = useState(false); // Estado para el modal
  const userData = {
    name: "Facundo Fierro",
    email: "facundof@cober.com.ar",
    equipo: "GrupoCober",
    role: "Desarrollador", // Suponiendo que tienes un rol
    avatar:
      "https://aguacatec.es/wp-content/uploads/2023/10/e5a978b8-6772-4c85-a50e-15581af7d483.png" // URL de la imagen del avatar
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const Notifications = () => {
    return (
      <SimpleBar style={{ maxHeight: "300px" }}>
        <ListGroup variant="flush">
          {NotificationList.map(function (item, index) {
            return (
              <ListGroup.Item
                className={index === 0 ? "bg-light" : ""}
                key={index}
              >
                <Row>
                  <Col>
                    <Link className="text-body" to="#">
                      <div className="d-flex">
                        <div className="avatar avatar-md rounded-circle"></div>
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{item.sender}</h5>
                          <p className="mb-3">{item.message}</p>
                          <span className="fs-6 text-muted">
                            <span>
                              <span className="fe fe-thumbs-up text-success me-1"></span>
                              {item.date}
                            </span>
                            <span className="ms-1">{item.time}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs="auto" className="text-center me-2">
                    <GKTippy content="Marcar como no leído">
                      <Link to="#">
                        <DotBadge bg="secondary"></DotBadge>
                      </Link>
                    </GKTippy>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  };

  return (
    <Fragment>
      <DarkLightMode />
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
      >
        <Dropdown as="li" className="ms-1">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div
              className="avatar avatar-md avatar-indicators avatar-online"
              style={{
                backgroundColor: "#754ffe",
                color: "white",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "40px",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "15px"
              }}
            >
              FF
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={isDesktop ? true : false}
            className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownUser"
            align="end"
          >
            <Dropdown.Item className="mt-3">
              <div className="d-flex">
                <div
                  className="avatar avatar-md avatar-indicators avatar-online"
                  style={{
                    backgroundColor: "#754ffe",
                    color: "white",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "40px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "15px"
                  }}
                >
                  FF
                </div>
                <div className="ms-3 lh-1">
                  <h5 className="mb-1">{userData.name}</h5>
                  <p className="mb-0 text-muted">{userData.email}</p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={handleShow}>
              <i className="fe fe-user me-2"></i> Perfil
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/settings/general">
              <i className="fe fe-settings me-2"></i> Configuración
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="mb-3">
              <i className="fe fe-power me-2"></i> Cerrar Sesión
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
      {/* Modal de Perfil */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Perfil de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <img
              src={userData.avatar}
              alt="Avatar"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <h5>{userData.name}</h5>
              <p className="text-muted">{userData.email}</p>
              <p className="text-muted">Rol: {userData.role}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default QuickMenu;
