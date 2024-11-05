import React, { useEffect, useState } from "react"; 
<<<<<<< HEAD
import { Accordion, Card, Dropdown, ListGroup, Spinner } from "react-bootstrap"; 
=======
import { Accordion, Card, Dropdown, ListGroup, Spinner, Table } from "react-bootstrap"; 
>>>>>>> 1f14548 (Tabla accordeon)
import { Link } from "react-router-dom";

const ProjectSummary = () => {
  const sheetNames = [
    "WagonPrestadores",
    "ClassicXPrestadores",
    "TayloredPrestadores",
    "CoberXPrestadores"
  ];

  const sheetCobertura = [
    "WagonCobertura",
    "ClassicXCobertura",
    "TayloredCobertura",
    "CoberXCobertura"
  ];

  const sheetDisplayNames = {
    WagonPrestadores: "WAGON",
    ClassicXPrestadores: "CLASSIC X",
    TayloredPrestadores: "TAYLORED",
    CoberXPrestadores: "COBER X",
    WagonCobertura: "WAGON",
    ClassicXCobertura: "CLASSIC X",
    TayloredCobertura: "TAYLORED",
    CoberXCobertura: "COBER X"
  };

  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://script.google.com/macros/s/AKfycby59xET9lbPnJz14gYd-XcwUFxA_nYU0K8EQsK4N56F6BlJb-C33VDGM0nhcQGcZaCS8g/exec";
      const newData = {};

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        sheetNames.forEach((sheetName) => {
          if (data[sheetName]) {
            newData[sheetName] = data[sheetName];
          } else {
            console.warn(`Hoja '${sheetName}' no encontrada en los datos.`);
          }
        });

        sheetCobertura.forEach((sheetName) => {
          if (data[sheetName]) {
            newData[sheetName] = data[sheetName];
          } else {
            console.warn(`Hoja '${sheetName}' no encontrada en los datos.`);
          }
        });

        setAllData(newData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Card>
        <Card.Header className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-2 mt-2">Planes Por Zona</h3>
          </div>
        </Card.Header>
        <Card.Body>
          {sheetNames.map((sheetName, sheetIndex) => {
            const sheetData = allData[sheetName] || []; 
            return (
              <Accordion key={sheetName}>
                <Accordion.Item eventKey={String(sheetIndex)}>
                  <Accordion.Header className="text-center">
                    <h5 className="mb-3 font-weight-bold text-uppercase">
                      {sheetDisplayNames[sheetName]}
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      {sheetData.length > 0 &&
                        Object.keys(sheetData[0]).map((header, colIndex) => (
                          <ListGroup.Item key={header}>
                            <Accordion>
                              <Accordion.Item eventKey={String(colIndex)}>
                                <Accordion.Header className="font-weight-bold text-uppercase">
                                  {header}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    {sheetData.map((row, rowIndex) => {
                                      const value = row[header];
                                      return value ? ( // Verifica que el valor no sea vacío
                                        <li key={rowIndex}>{value}</li>
                                      ) : null; // Si está vacío, no renderiza nada
                                    })}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </ListGroup.Item>
<<<<<<< HEAD
                        ))}
=======
                        ))}  
>>>>>>> 1f14548 (Tabla accordeon)
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Card.Body>
      </Card>
<<<<<<< HEAD
=======

>>>>>>> 1f14548 (Tabla accordeon)
      <Card className="mt-4">
        <Card.Header className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-2 mt-2">Planes Por Cobertura</h3>
          </div>
        </Card.Header>
        <Card.Body>
          {sheetCobertura.map((sheetName, sheetIndex) => {
            const sheetData = allData[sheetName] || []; 
<<<<<<< HEAD
=======
            const columns = Object.keys(sheetData[0] || {}); // Obtener las claves del primer objeto
            
            // Dividir las columnas en bloques de 3
            const chunkedColumns = [];
            for (let i = 0; i < columns.length; i += 3) {
              chunkedColumns.push(columns.slice(i, i + 3));
            }

>>>>>>> 1f14548 (Tabla accordeon)
            return (
              <Accordion key={sheetName}>
                <Accordion.Item eventKey={String(sheetIndex)}>
                  <Accordion.Header className="text-center">
                    <h5 className="mb-3 font-weight-bold text-uppercase">
                      {sheetDisplayNames[sheetName]}
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
<<<<<<< HEAD
                    <ListGroup variant="flush">
                      {sheetData.length > 0 &&
                        Object.keys(sheetData[0]).map((header, colIndex) => (
                          <ListGroup.Item key={header}>
                            <Accordion>
                              <Accordion.Item eventKey={String(colIndex)}>
                                <Accordion.Header className="font-weight-bold text-uppercase">
                                  {header}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    {sheetData.map((row, rowIndex) => {
                                      const value = row[header];
                                      return value ? ( // Verifica que el valor no sea vacío
                                        <li key={rowIndex}>{value}</li>
                                      ) : null; // Si está vacío, no renderiza nada
                                    })}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
=======
                    {chunkedColumns.map((columnGroup, groupIndex) => (
                      <div className="table-responsive" key={groupIndex}>
                        <Table className="text-nowrap">
                          <thead className="table-light">
                            <tr>
                              {columnGroup.map((header, index) => (
                                <th key={index} scope="col">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sheetData.map((row, rowIndex) => {
                              const hasData = columnGroup.some(key => row[key]); // Verifica si al menos una celda tiene valor
                              return hasData ? ( // Solo renderiza la fila si tiene datos
                                <tr key={rowIndex}>
                                  {columnGroup.map((key, index) => (
                                    <td key={index}>{row[key]}</td> // Renderiza el valor de la celda
                                  ))}
                                </tr>
                              ) : null; // Si no hay datos, no renderiza la fila
                            })}
                          </tbody>
                        </Table>
                      </div>
                    ))}
>>>>>>> 1f14548 (Tabla accordeon)
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectSummary;
