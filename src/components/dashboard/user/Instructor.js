import { Fragment, useState, useEffect } from "react";
import {
  Col,
  Row,
  Breadcrumb,
  Button,
  Table,
  Spinner,
  Pagination,
  Form,
  Modal
} from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProspectForm from "../user/addform";
import { useAuth } from "../authentication/AuthContext";
const Instructor = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [isTableView, setIsTableView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEstado, setSelectedEstado] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { userData } = useAuth(); 
  const estados = [
    "Cotizacion Enviada",
    "Desestimado Preexistencia",
    "Desestimado Fuera de Zona",
    "Desestimado por Edad",
    "Pasa de Vigencia",
    "No Contesta",
    "Prueba Interna",
    "Busca Aporte x Aporte",
    "No Contesta",
    "Ya es Socio",
    "Buscas Otra Cobertura",
    "Teléfono Erróneo",
    "Email Erróneo",
    "No le Interesa por Costos",
    "No le Interesa por Cartilla",
    "Tomó Otra Cobertura"
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `https://script.google.com/macros/s/AKfycbxNn3wU0BDPbf6laTTq3PCaq6N7SkyVIdrzrKZkWrUW0pzcHU0Ku-tMQiZVsl6pZBRSGA/exec?vendedor=${userData.vendedor}&func=obtenerDatos`;


    const fetchGoogleSheetsData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleSheetsData();
  }, []);

  const filteredData = data.filter((person) =>
    person.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedEstado === "" || person.estado === selectedEstado)
  );

  const handleEstadoChange = (person, newEstado) => {
    setData(prevData =>
      prevData.map(p => (p.id === person.id ? { ...p, estado: newEstado } : p))
    );
  };

  const enviarDatos = async (id, estado) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxNn3wU0BDPbf6laTTq3PCaq6N7SkyVIdrzrKZkWrUW0pzcHU0Ku-tMQiZVsl6pZBRSGA/exec?func=cambiarEstadoDato",
        {
          method: "POST",
          body: JSON.stringify({ id, estado })
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      const resultado = await response.json();
      alert("Datos enviados correctamente: " + JSON.stringify(resultado));
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error al enviar los datos. Por favor, intenta nuevamente.");
    }
  };

  const createCards = (data, page) => {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const paginatedData = data.slice(start, end);

    const handleDetailsClick = (person) => {
      navigate("/dashboard/projects/single/overview", { state: { prospecto: person } });
  };
  
    
    return (
      <>
        <ProspectForm show={showModal} handleClose={() => setShowModal(false)} />
        <Row>
          {paginatedData.map((person, index) => (
            <Col key={index} xl={4} lg={6} md={6} xs={12} className="mb-4">
              <div className="card border-light shadow-sm" style={{ borderRadius: "40px" }}>
                <div className="card-body" style={{ padding: "50px" }}>
                  <div className="text-start">
                    <div className="position-relative">
                      <div
                        className="avatar"
                        style={{
                          backgroundColor: "#754ffe",
                          color: "white",
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "40px",
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "15px",
                        }}
                      >
                        {person.nombre.split(" ").map((n) => n[0]).join("").toUpperCase()}
                      </div>
                      <a href="#" className="position-absolute mb-5 mt-8 ms-n5">
                        <span className="status bg-success"></span>
                      </a>
                    </div>
                    <h6 className="text-uppercase mb-1" style={{ color: "#754ffe" }}>{person.partido || "SIN PARTIDO"}</h6>
                    <h4 className="mb-0">{person.nombre.toUpperCase()}</h4>
                  </div>
                  <div className="mt-4 p-0">
                    <div className="d-flex justify-content-between">
                      <div className="w-100 py-2 px-3 border-top border-bottom">
                        <h6 className="mb-0">Fecha de Ingreso:</h6>
                        <p className="text-dark fs-6 fw-semibold mb-0">{new Date(person.fecha).toLocaleDateString()}</p>
                      </div>
                      <div className="w-100 py-2 px-3 border-top border-bottom">
                        <h6 className="mb-0">Hora de Ingreso:</h6>
                        <p className="text-dark fs-6 fw-semibold mb-0">{person.hora}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 align-items-center">
                    <span>Estado</span>
                    <div className="d-flex align-items-center">
                      <Form.Select
                        value={person.estado}
                        onChange={(e) => handleEstadoChange(person, e.target.value)}
                        className="text-dark ms-3"
                        style={{ marginLeft: "10px", width: "150px" }}
                      >
                        {estados.map((estado, index) => (
                          <option key={index} value={estado}>
                            {estado}
                          </option>
                        ))}
                      </Form.Select>
                      <Button
                        variant="primary"
                        style={{
                          marginLeft: "10px",
                          padding: "2px 5px",
                          fontSize: "15px",
                        }}
                        onClick={() => enviarDatos(person.id, person.estado)}
                      >
                        <i className="fas fa-arrow-up"></i>
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                    <span>Edad</span>
                    <span className="text-dark">{person.edad}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                    <span>Tipo de Afiliación</span>
                    <span className="text-dark">{person.tAfiliacion}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                    <span>Grupo Familiar</span>
                    <span className="text-dark">{person.gpFamiliar}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                    <span>Celular</span>
                    <span className="text-dark d-flex align-items-center">
                      <a href={`https://wa.me/+54${person.cel}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                        <FaWhatsapp style={{ width: "34px", height: "34px", color: "#25D366" }} />
                      </a>
                    </span>
                  </div>
                  {/* Agregando el Progress Bar para la evolución */}
                  <div className="mt-3">
  <span>Evolución</span>
  <div className="position-relative mt-2">
    <div className="progress" style={{ height: '20px' }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${person.evolucion}%`,
          backgroundColor: '#4caf50',
        }}
        aria-valuenow={person.evolucion}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
    <span
      style={{
        position: 'absolute',
        top: '-25px', // Ajusta la posición vertical según sea necesario
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white', // Cambia el color si es necesario
        fontWeight: 'bold',
      }}
    >
      {person.evolucion}%
    </span>
  </div>
</div>
                  <Button onClick={() => handleDetailsClick(person)} variant="primary" className="mt-4" style={{ width: "100%", borderRadius: "20px" }}>
                    Ver Más Detalles
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination className="mt-4">
          {Array.from({ length: Math.ceil(filteredData.length / cardsPerPage) }, (_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </>
    );
  };
  const handleDetailsClick = (person) => {
    navigate("/dashboard/projects/single/overview", { state: { prospecto: person } });
  };
  const createTable = (data) => (
    <div style={{ overflowX: 'auto' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Partido</th>
            <th>Estado</th>
            <th>Tipo de Afiliación</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.nombre}</td>
              <td>{person.edad}</td>
              <td>{person.partido}</td>
              <td>{person.estado}</td>
              <td>{person.tAfiliacion}</td>
              <td>
                <a href={`https://wa.me/+54${person.cel}`} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={30} /> {/* O usa style={{ fontSize: '30px' }} */}
                </a>
              </td>
              <td>
                <Button onClick={() => handleDetailsClick(person)} variant="primary" className="mt-1 mb-1" style={{ width: "100%", borderRadius: "20px" }}>
                  Ver Más Detalles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
  
  return (
    <Fragment>
      <Row className="mb-4">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
            <Breadcrumb.Item active>Prospectos</Breadcrumb.Item>
          </Breadcrumb>
          <h1>Prospectos</h1>
          {userData && <h2>Bienvenido, {userData.vendedor}!</h2>}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setIsTableView(!isTableView)} variant="secondary" className="mb-3 me-3">
            {isTableView ? "Ver como Tarjetas" : "Ver como Tabla"}
          </Button>
          <Button onClick={() => setShowModal(true)} variant="primary" className="mb-3">
            Agregar Prospecto
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Buscar Prospectos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />
        </Col>
        <Col>
          <Form.Select
            value={selectedEstado}
            onChange={(e) => setSelectedEstado(e.target.value)}
            className="mb-3"
          >
            <option value="">Filtrar por Estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : isTableView ? (
        createTable(filteredData)
      ) : (
        createCards(filteredData, currentPage)
      )}
    </Fragment>
  );
};

export default Instructor;
