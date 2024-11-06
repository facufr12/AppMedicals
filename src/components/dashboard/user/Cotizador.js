import React, { useState, useEffect } from "react";

const CotizadorForm = () => {
  const [edadTitular, setEdadTitular] = useState("");
  const [tipoContratacion, setTipoContratacion] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [tieneHijos, setTieneHijos] = useState(null);
  const [cantidadHijos, setCantidadHijos] = useState(0);
  const [edadesHijos, setEdadesHijos] = useState([]);
  const [edadEsposa, setEdadEsposa] = useState("");
  const [tipoContratacionEsposa, setTipoContratacionEsposa] = useState("");
  const [cotizacion, setCotizacion] = useState(null);
  const [prospectoData, setProspectoData] = useState({
    nombre: "",
    fechaIngreso: "",
    fechaCierre: "",
    celular: "",
    correo: "",
    edad: "",
    nPoliza: "",
    estado: "",
  });

  useEffect(() => {
    const fetchProspectoData = async () => {
      // Simulamos la obtención de datos desde una API
      setTimeout(() => {
        setProspectoData({
          nombre: "Juan Pérez",
          fechaIngreso: "2024-10-01",
          fechaCierre: "2024-10-07",
          celular: "1234567890",
          correo: "juan.perez@example.com",
          edad: "30",
          nPoliza: "ABC123456",
          estado: "Activo",
        });
      }, 1000);
    };

    fetchProspectoData();
  }, []);

  const handleHijosChange = (event) => {
    const value = event.target.value;
    setTieneHijos(value === "true");
    setCantidadHijos(0); // Resetear la cantidad de hijos al cambiar la opción
  };

  const handleCantidadHijosChange = (event) => {
    const cantidad = parseInt(event.target.value, 10);
    setCantidadHijos(cantidad);
    const nuevasEdadesHijos = Array(cantidad).fill(""); // Crear un array con campos vacíos para las edades de los hijos
    setEdadesHijos(nuevasEdadesHijos);
  };

  const handleEdadHijoChange = (index, value) => {
    const nuevasEdadesHijos = [...edadesHijos];
    nuevasEdadesHijos[index] = value;
    setEdadesHijos(nuevasEdadesHijos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonData = {
      age: parseInt(edadTitular, 10),
      maritalStatus: estadoCivil,
      wifeAge: parseInt(edadEsposa, 10) || null,
      membershipWife: tipoContratacionEsposa || null,
      salaryWife: 0, // Aquí puedes agregar lógica para el sueldo de la esposa
      numberSons: tieneHijos ? cantidadHijos : null,
      membership: tipoContratacion,
      salary: 0, // Aquí puedes agregar lógica para el sueldo del titular
    };

    if (tieneHijos) {
      jsonData.sons = true;
      jsonData.ageSons = edadesHijos.map((edad) => parseInt(edad, 10));
    } else {
      jsonData.sons = false;
    }

    // Simulación de la solicitud a la API
    fetch("https://crudbackend.cober.online/quote/2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((quotes) => {
        setCotizacion(quotes);
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
  };

  // Crear las tarjetas de cotización
  const createCardQuote = () => {
    if (!cotizacion) return null;

    // Definimos aquí los datos necesarios
    const data = {
      cobertura: estadoCivil === "Soltero" ? "Individual" : "Matrimonio",
      edad: edadTitular,
      hijos: tieneHijos ? "Con Hijos" : "Sin Hijos",
      contratacion: tipoContratacion,
    };

    return Object.keys(cotizacion.WithDs).map((key) => {
      const quoteNoDs = parseFloat(cotizacion.NoDs[key]).toFixed(0);
      const quoteWithDs = parseFloat(cotizacion.WithDs[key]).toFixed(0);
      const descuentos = cotizacion.Discounts;
      const descuentoTitular =
        tipoContratacion === "Recibo de Sueldo"
          ? `Aportes Titular RelDep -$${parseFloat(descuentos.Owner).toFixed(0)}`
          : `Aporte/Descuento Monotributo -$${parseFloat(descuentos.Owner).toFixed(0)}`;

      return (
        <div key={key} className="card mt-2 mt-lg-0">
          <div className="card-body">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h4 className="mb-1">Cotización Plan</h4>
            </div>
            <div className="d-md-flex">
              <div>
               
              </div>
              <div className="ms-md-4 mt-2">
                <h4 className="mb-1 text-primary-hover">{key}</h4>
                <h5>
                  {data.cobertura}. {data.edad}. {data.hijos}
                </h5>
              </div>
            </div>
          </div>
          <div className="card-body border-top pt-2">
            <ul className="list-group list-group-flush mb-0">
              <li className="d-flex justify-content-between list-group-item px-0">
                <span>Subtotal</span>
                <span className="text-dark fw-semibold"><del>${quoteNoDs}</del></span>
              </li>
              <li className="d-flex justify-content-between list-group-item px-0 align-items-center">
                <span className="me-2">Descuento</span>
                <div className="ms-auto d-flex align-items-center">
                  <div className="icon-shape icon-lg bg-light-success text-success rounded-circle me-2">
                    <i className="fe fe-pie-chart fs-3"></i>
                  </div>
                  <span className="text-success fw-semibold"> -${parseFloat(descuentos.Total).toFixed(0)}</span>
                </div>
              </li>
              <li className="d-flex align-items-center list-group-item px-0">
                <span className="me-2">Total a Pagar</span>
                <span className="text-dark fw-semibold me-2">${quoteWithDs}</span>
                <div className="icon-shape icon-lg bg-light-danger text-danger rounded-circle">
                  <i className="fe fe-shopping-cart fs-3"></i>
                </div>
              </li>
            </ul>
          </div>
          <a href="detalle-prospecto.html" className="btn btn-primary">
            Enviar Cotización -->
          </a>
        </div>
      );
    });
  };

  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="text-start">
            <h6 className="text-uppercase mb-1" style={{ color: "#754ffe" }}>
              Formulario Cotizador
            </h6>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h4 className="mb-0">Composición del Grupo</h4>
              </div>
              <div className="row gx-3">
                <div className="mb-3 col-12">
                  <h6 className="mb-1">Titular</h6>
                </div>
                <div className="d-flex flex-wrap mt-md-3">
                  <div className="col-md-6 col-12 pe-md-3 mb-2">
                    <select
                      value={edadTitular}
                      onChange={(e) => setEdadTitular(e.target.value)}
                      className="form-select"
                      required
                    >
                      <option value="" disabled>
                        Seleccionar Edad
                      </option>
                      {[...Array(82)].map((_, age) => (
                        <option key={age} value={age + 18}>
                          {age + 18}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <select
                      value={tipoContratacion}
                      onChange={(e) => setTipoContratacion(e.target.value)}
                      className="form-select"
                      required
                    >
                      <option value="" disabled>
                        Contratación
                      </option>
                      <option value="Particular">Particular</option>
                      <option value="Recibo de Sueldo">Recibo de Sueldo</option>
                      <option value="Monotributo">Monotributo</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-wrap mt-md-3">
                  <div className="col-md-6 col-12 pe-md-3 mb-2">
                    <select
                      value={estadoCivil}
                      onChange={(e) => setEstadoCivil(e.target.value)}
                      className="form-select"
                      required
                    >
                      <option value="" disabled>
                        Estado civil
                      </option>
                      <option value="Soltero">Soltero</option>
                      <option value="Casado">Casado</option>
                      <option value="Concubinato">Concubinato</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label className="form-label">¿Tiene hijos?</label>
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tieneHijos"
                        id="hijos_si"
                        value="true"
                        onChange={handleHijosChange}
                      />
                      <label className="form-check-label" htmlFor="hijos_si">
                        Sí
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tieneHijos"
                        id="hijos_no"
                        value="false"
                        onChange={handleHijosChange}
                      />
                      <label className="form-check-label" htmlFor="hijos_no">
                        No
                      </label>
                    </div>
                    {tieneHijos !== null && (
                      <div id="hijos_section" style={{ display: tieneHijos ? "block" : "none" }}>
                        <label htmlFor="cantidad_hijos" className="form-label">
                          Cantidad de hijos
                        </label>
                        <input
                          type="number"
                          id="cantidad_hijos"
                          className="form-control"
                          min="0"
                          onChange={handleCantidadHijosChange}
                        />
                        <div id="edades_hijos" className="mt-3">
                          {edadesHijos.map((edad, index) => (
                            <input
                              key={index}
                              type="number"
                              className="form-control mb-2"
                              placeholder={`Edad Hijo ${index + 1}`}
                              value={edad}
                              onChange={(e) => handleEdadHijoChange(index, e.target.value)}
                              required
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button id="cotizar" className="btn btn-primary" type="submit">
                  Cotizar
                  <i className="fe fe-credit-card ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Card de Registro Detallado del Prospecto */}
      <div className="card mt-4">
        <div className="card-header">
          <h5>Registro Detallado del Prospecto</h5>
        </div>
        <div className="card-body">
          <h6 className="mb-1">Nombre: {prospectoData.nombre}</h6>
          <h6 className="mb-1">Fecha de Ingreso: {prospectoData.fechaIngreso}</h6>
          <h6 className="mb-1">Fecha de Cierre: {prospectoData.fechaCierre}</h6>
          <h6 className="mb-1">Celular: {prospectoData.celular}</h6>
          <h6 className="mb-1">Correo: {prospectoData.correo}</h6>
          <h6 className="mb-1">Edad: {prospectoData.edad}</h6>
          <h6 className="mb-1">N° de Póliza: {prospectoData.nPoliza}</h6>
          <h6 className="mb-1">Estado: {prospectoData.estado}</h6>
        </div>
      </div>

      {/* Tarjeta de Cotización */}
      {cotizacion && (
        <div className="card mt-4">
          <div className="card-header">
            <h5>Resultado de la Cotización</h5>
          </div>
          <div className="card-body">
            {createCardQuote()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CotizadorForm;
