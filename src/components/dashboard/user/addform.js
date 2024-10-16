import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ProspectForm = ({ show, handleClose }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [tAfiliacion, setTAfiliacion] = useState("");
  const [gpFamiliar, setGpFamiliar] = useState("");
  const [cel, setCel] = useState("");
  const [correo, setCorreo] = useState("");
  const [partido, setPartido] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza la petición fetch
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxNn3wU0BDPbf6laTTq3PCaq6N7SkyVIdrzrKZkWrUW0pzcHU0Ku-tMQiZVsl6pZBRSGA/exec?func=añadirDato",
        {
          method: "POST",
          body: JSON.stringify({
            nombre,
            edad,
            tAfiliacion,
            gpFamiliar,
            cel,
            correo,
            partido,
            estado,
          }),
        }
      );

      // Maneja la respuesta
      if (response.ok) {
        const resultado = await response.json();
        alert("Datos enviados correctamente: " + JSON.stringify(resultado));
        handleClose(); // Cierra el modal
      } else {
        alert(
          "Error al enviar los datos: " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error al enviar los datos. Por favor, intenta nuevamente.");
    }
  };

  const isAlphabets = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
  const isValidCel = (cel) => /^\d{10}$/.test(cel); // Suponiendo que el celular debe tener 10 dígitos
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Prospecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label style={{ marginTop: '1rem' }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              isInvalid={!isAlphabets(nombre) && nombre.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Solo se permiten caracteres alfabéticos.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="edad">
            <Form.Label style={{ marginTop: '1rem' }}>Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa la edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
              isInvalid={edad <= 0 || edad > 120}
            />
            <Form.Control.Feedback type="invalid">
              Introduzca un dato correcto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="tAfiliacion">
            <Form.Label style={{ marginTop: '1rem' }}>Tipo Afiliación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tipo de Afiliación"
              value={tAfiliacion}
              onChange={(e) => setTAfiliacion(e.target.value)}
              required
              isInvalid={!isAlphabets(tAfiliacion) && tAfiliacion.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Solo se permiten caracteres alfabéticos.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="gpFamiliar">
            <Form.Label style={{ marginTop: '1rem' }}>Grupo Familiar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Grupo Familiar"
              value={gpFamiliar}
              onChange={(e) => setGpFamiliar(e.target.value)}
              required
              isInvalid={!isAlphabets(gpFamiliar) && gpFamiliar.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Solo se permiten caracteres alfabéticos.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="cel">
            <Form.Label style={{ marginTop: '1rem' }}>Celular</Form.Label>
            <Form.Control
              type="text"
              placeholder="Celular"
              value={cel}
              onChange={(e) => setCel(e.target.value)}
              required
              isInvalid={!isValidCel(cel) && cel.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Debe ser un número de 10 dígitos.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="correo">
            <Form.Label style={{ marginTop: '1rem' }}>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              isInvalid={!isValidEmail(correo) && correo.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un correo válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="partido">
            <Form.Label style={{ marginTop: '1rem' }}>Partido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Partido"
              value={partido}
              onChange={(e) => setPartido(e.target.value)}
              required
              isInvalid={!isAlphabets(partido) && partido.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Solo se permiten caracteres alfabéticos.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="estado">
            <Form.Label style={{ marginTop: '1rem' }}>Estado</Form.Label>
            <Form.Control
              as="select"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            >
              <option value="">Selecciona un estado</option>
              <option value="Cotizacion Enviada">Cotizacion Enviada</option>
              <option value="Venta Cerrada">Venta Cerrada</option>
              <option value="Pago Pendiente">Pago Pendiente</option>
              <option value="En Espera">En Espera</option>
              <option value="Pasa de Vigencia">Pasa de Vigencia</option>
              <option value="Es Afiliado">Es Afiliado</option>
              <option value="Duplicado">Duplicado</option>
              <option value="Desestimado Por Cober">Desestimado Por Cober</option>
              <option value="No Le Interesa">No Le Interesa</option>
              <option value="Rechazado">Rechazado</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Guardar Prospecto
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProspectForm;
