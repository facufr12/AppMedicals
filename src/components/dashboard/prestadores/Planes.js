import React, { useEffect, useState } from "react"; 
import { Accordion, Card, Dropdown, ListGroup, Spinner, Table } from "react-bootstrap"; 
import { Link } from "react-router-dom";

const ProjectSummary = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const paddingStyle = isMobile ? { padding: "0px", margin: "0px" } : { padding: "10px" };


  const sheetNames = [
    "MD450Prestadores",
    "MD350Prestadores",
    "MD250Prestadores",
    "MD150Prestadores"
  ];

  const sheetCobertura = [
    "MD450Cobertura",
    "MD350Cobertura",
    "MD250Cobertura",
    "MD150Cobertura"
  ];

  const sheetDisplayNames = {
    MD450Prestadores: "MD450",
    MD350Prestadores: "MD350",
    MD250Prestadores: "MD250",
    MD150Prestadores: "MD150",
    MD450Cobertura: "MD450",
    MD350Cobertura: "MD350",
    MD250Cobertura: "MD250",
    MD150Cobertura: "MD150"
  };

  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_PLANES_URL; // Usa la variable de entorno
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
  <Card style={paddingStyle}>
    <Card.Header className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-2 mt-2 text-center">Prestadores Por Zona</h3>
      </div>
    </Card.Header>
    <Card.Body style={paddingStyle}>
      {sheetNames.map((sheetName, sheetIndex) => {
        const sheetData = allData[sheetName] || [];
        return (
          <Accordion style={paddingStyle} key={sheetName}>
            <Accordion.Item eventKey={String(sheetIndex)}>
              <Accordion.Header className="text-center">
                <h5 className="mb-3 font-weight-bold text-uppercase">
                  {sheetDisplayNames[sheetName]}
                </h5>
              </Accordion.Header>
              <Accordion.Body style={paddingStyle}>
                <ListGroup variant="flush">
                  {sheetData.length > 0 &&
                    Object.keys(sheetData[0]).map((header, colIndex) => (
                      <ListGroup.Item style={paddingStyle} key={header}>
                        <Accordion>
                          <Accordion.Item eventKey={String(colIndex)}>
                            <Accordion.Header className="font-weight-bold text-uppercase text-center">
                              {header}
                            </Accordion.Header>
                            <Accordion.Body style={paddingStyle}>
                              <ul className="text-center">
                                {sheetData.map((row, rowIndex) => {
                                  const value = row[header];
                                  return value ? (
                                    <li key={rowIndex}>{value}</li>
                                  ) : null;
                                })}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </Card.Body>
  </Card>

  <Card className="mt-4 p-0 p-lg-3">
    <Card.Header className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-2 mt-2 text-center">Cobertura por Plan</h3>
      </div>
    </Card.Header>
    <Card.Body style={paddingStyle}>
      {sheetCobertura.map((sheetName, sheetIndex) => {
        const sheetData = allData[sheetName] || [];
        const columns = Object.keys(sheetData[0] || {});

        const chunkedColumns = [];
        for (let i = 0; i < columns.length; i += 3) {
          chunkedColumns.push(columns.slice(i, i + 3));
        }

        return (
          <Accordion style={paddingStyle} key={sheetName}>
            <Accordion.Item style={paddingStyle} eventKey={String(sheetIndex)}>
              <Accordion.Header style={paddingStyle} className="text-center">
                <h5 className="mb-3 font-weight-bold text-uppercase">
                  {sheetDisplayNames[sheetName]}
                </h5>
              </Accordion.Header>
              <Accordion.Body style={paddingStyle}>
                {chunkedColumns.map((columnGroup, groupIndex) => (
                  <div className="table-responsive" key={groupIndex}>
                    <Table className="table-bordered text-center mx-auto" style={{ width: '90%' }}>
                      <thead className="table-light">
                        <tr>
                          {columnGroup.map((header, index) => (
                            <th key={index} scope="col" className="text-center">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sheetData.map((row, rowIndex) => {
                          const hasData = columnGroup.some((key) => row[key]);
                          return hasData ? (
                            <tr key={rowIndex}>
                              {columnGroup.map((key, index) => (
                                <td key={index} className="text-center" style={{ padding: '8px' }}>
                                  {row[key]}
                                </td>
                              ))}
                            </tr>
                          ) : null;
                        })}
                      </tbody>
                    </Table>
                  </div>
                ))}
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