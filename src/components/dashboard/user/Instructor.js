// import node module libraries
import { Fragment, useState, useEffect } from "react";
import { Col, Row, Card, Tab, Breadcrumb, Button, Table } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate

// import sub components
import InstructorsGridView from "./InstructorsGridCard";
import InstructorsListItems from "./InstructorsListItems";

const Instructor = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [isTableView, setIsTableView] = useState(false);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  useEffect(() => {
    const apiUrl =
      "https://script.googleusercontent.com/macros/echo?user_content_key=gIdVyLfZVXlhTXU4uuU2XnPLpnrRfk1hzAl8XVeXlYzMlieUYvq5IGabbou2u0IOGMsVD0EV5clmds2lgJVbW3P1RmrawUZEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGl29ebRzV5W6uyGQ719j1FkITB3Rt2REr1pZZbDsf3A25jJWAnGi-e7pGUVOMvitr1rG2gmFWXHZjyC-rd-UKymlTLhpyY2jg&lib=MSmCyi5M1QFWbYo20HW2AZnFr3qi2vAlX";

    const fetchGoogleSheetsData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const normalizedData = data.map((person) => ({
          ...person,
          evolución: Math.round(Number(person.evolución) / 25) * 25
        }));
        setData(normalizedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGoogleSheetsData();
  }, []);

  // Función para manejar la redirección al hacer clic en "Detalles del Prospecto"
  const handleDetailsClick = () => {
    navigate("/Cotizador"); // Redirige a la URL deseada
  };

  const createCards = (data, page) => {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const paginatedData = data.slice(start, end);

    return (
      <Row>
        {paginatedData.map((person, index) => (
          <Col key={index} xl={4} lg={6} md={6} xs={12} className="mb-4">
            <div
              className="card border-light shadow-sm"
              style={{ borderRadius: "40px" }}
            >
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
                        marginBottom: "15px"
                      }}
                    >
                      {person.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <a href="#" className="position-absolute mb-5 mt-8 ms-n5">
                      <span className="status bg-success"></span>
                    </a>
                  </div>
                  <h6
                    className="text-uppercase mb-1"
                    style={{ color: "#754ffe" }}
                  >
                    {person.Partido || "SIN PARTIDO"}
                  </h6>
                  <h4 className="mb-0">{person.nombre}</h4>
                </div>
                <div className="mt-4 p-0">
                  <div className="d-flex justify-content-between">
                    <div className="w-100 py -2 px-3 border-top border-bottom">
                      <h6 className="mb-0">Fecha de Ingreso:</h6>
 <p className="text-dark fs-6 fw-semibold mb-0">
                        {new Date(person.Fecha).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="w-100 py-2 px-3 border-top border-bottom">
                      <h6 className="mb-0">Hora de Ingreso:</h6>
                      <p className="text-dark fs-6 fw-semibold mb-0">
                        {person.Hora}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>Edad</span>
                  <span className="text-dark">{person.Edad}</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                  <span>Tipo de Afiliación</span>
                  <span className="text-dark">{person.tipoafiliacion}</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                  <span>Grupo Familiar</span>
                  <span className="text-dark">{person.grupofamiliar}</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2 mt-3">
                  <span>Celular</span>
                  <span className="text-dark d-flex align-items-center">
                    <a
                      href={`https://wa.me/+54${person.Celular}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaWhatsapp
                        style={{
                          width: "34px",
                          height: "34px",
                          color: "#25D366"
                        }}
                      />
                    </a>
                  </span>
                </div>
                <div className="d-flex justify-content-between pt-2">
                  <div className="pt-2">
                    <span>Estado</span>
                  </div>
                  <select
                    className="form-select w-65 d-flex text-center"
                    id="category"
                  >
                    <option value="">
                      {person.estado || "Seleccionar Estado"}
                    </option>
                    <option value="Venta Cerrada">Venta Cerrada</option>
                    <option value="Pago Pendiente">Pago Pendiente</option>
                    <option value="En Espera">En Espera</option>
                    <option value="Pasa de Vigencia">Pasa de Vigencia</option>
                    <option value="Es Afiliado">Es Afiliado</option>
                    <option value="Duplicado">Duplicado</option>
                    <option value="Desestimado Por Cober">
                      Desestimado Por Cober
                    </option>
                    <option value="No Le Interesa">No Le Interesa</option>
                    <option value="Rechazado">Rechazado</option>
                  </select>
                </div>
                <div className="progress progress-tooltip mt-5">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${person.evolución}%`,
                      backgroundColor: "#754ffe"
                    }}
                    aria-valuenow={person.evolución}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ color: "white" }}>{person.evolución}%</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-5">
                  <Button onClick={handleDetailsClick} variant="primary">
                    Detalles del Prospecto
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  };

  const createTable = (data) => {
    return (
      <Table className="text-nowrap">
        <thead className="table-light">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha de Ingreso</th>
            <th scope="col">Hora de Ingreso</th>
            <th scope="col">Edad</th>
            <th scope="col">Tipo de Afiliación</th>
            <th scope="col">Grupo Familiar</th>
            <th scope="col">Celular</th>
            <th scope="col">Estado</th>
            <th scope="col">Evolución</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.nombre}</td>
              <td>{new Date(person.Fecha).toLocaleDateString()}</td>
              <td>{person.Hora}</td>
              <td>{person.Edad}</td>
              <td>{person .tipoafiliacion}</td>
              <td>{person.grupofamiliar}</td>
              <td>{person.Celular}</td>
              <td>{person.estado}</td>
              <td>
                <div className="progress progress-tooltip">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${person.evolución}%`,
                      backgroundColor: "#754ffe"
                    }}
                    aria-valuenow={person.evolución}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ color: "white" }}>{person.evolución}%</span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleToggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <Fragment>
      <Tab.Container defaultActiveKey="grid">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">
                  Prospectos <span className="fs-5 text-muted"></span>
                </h1>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item active>Prospecto</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={handleToggleView}
                >
                  {isTableView ? "Ver como tarjetas" : "Ver como lista"}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Tab.Content>
          <Tab.Pane eventKey="grid" className="pb-4">
            {isTableView ? createTable(data) : createCards(data, currentPage)}
          </Tab.Pane>
          <Tab.Pane eventKey="list" className="pb-4">
            <Card className="mb-5 ">
              <Card.Body className="p-0">
                {isTableView
                  ? createTable(data)
                  : createCards(data, currentPage)}
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Fragment>
  );
};
export default Instructor;