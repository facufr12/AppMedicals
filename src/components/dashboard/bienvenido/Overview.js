import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUser, FaFileAlt, FaChartBar } from 'react-icons/fa'; // Importa los iconos

const Overview = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleFilter = () => {
    console.log("Filtrar desde:", startDate, "hasta:", endDate);
  };

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-2 mb-lg-0">
              <h2 className="mb-6">¡Bienvenido a mi plan Cober!</h2>
              <h1 className="h2 fw-bold">Estadísticas</h1>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={4} lg={6} md={12} className="mb-4">
          <Card>
            <Card.Body className="py-lg-4">
              <div id="chart">
                <h4 className="mb-4">Desde</h4>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xl={4} lg={6} md={12} className="mb-4">
          <Card>
            <Card.Body className="py-lg-4">
              <div id="chart">
                <h4 className="mb-4">Hasta</h4>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={6} md={12} className="mb-4 d-flex align-items-end">
          <Button onClick={handleFilter} variant="primary" size="lg">
            Filtrar
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xl={4} lg={6} md={12} className="mb-4">
          <Card>
            <Card.Body className="py-lg-4 d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-1">LEADS TOTALES</h4>
                <p>Información sobre los leads totales.</p>
              </div>
              <FaUser className="text-primary" size={26} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={12} className="mb-4">
          <Card>
            <Card.Body className="py-lg-4 d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-1">PÓLIZAS</h4>
                <p>Detalles sobre las pólizas.</p>
              </div>
              <FaFileAlt className="text-success" size={26} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={12} className="mb-4">
          <Card>
            <Card.Body className="py-lg-4 d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-1">Activity</h4>
                <p>Resumen de la actividad.</p>
              </div>
              <FaChartBar className="text-danger" size={26} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
