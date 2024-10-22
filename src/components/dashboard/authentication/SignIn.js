import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";
import Logo from "../../../assets/images/logo-cober.svg";
import DarkLightMode from "layouts/DarkLightMode";
import authService from "./authService";
import { useAuth } from './AuthContext'; // Importa el contexto

const SignIn = () => {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUserData } = useAuth(); // Usa el hook para acceder a setUserData

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        try {
            const credentials = { usuario, contraseña };
            const data = await authService.login(credentials);

            console.log("Respuesta del servidor:", data);

            // Verifica si la respuesta incluye las propiedades necesarias
            if (data && data.vendedor && data.email && data.cel && data.categoria) {
                console.log("Inicio de sesión exitoso:", data);
                setUserData(data); // Guarda los datos en el contexto
                navigate("/user/instructor");
            } else if (data.error) {
                alert(data.error);
                console.error("Credenciales inválidas:", data.error);
                setError(data.error);
            } else {
                setError("Error en el inicio de sesión. Verifica tus credenciales.");
            }
        } catch (err) {
            console.error("Error capturado:", err);
            setError(err.message || "Error en el inicio de sesión. Verifica tus credenciales.");
        }
    };

    return (
        <Fragment>
            <Row className="align-items-center justify-content-center g-0 min-vh-100">
                <Col lg={5} md={5} className="py-8 py-xl-0">
                    <Card style={{ borderRadius: "40px" }}>
                        <Card.Body className="p-6">
                            <div className="mb-4 text-center">
                                <Link to="/">
                                    <Image
                                        src={Logo}
                                        className="mb-4"
                                        alt=""
                                        style={{ width: "150px" }}
                                    />
                                </Link>
                                <h1 className="mb-1 fw-bold">Inicio de Sesión</h1>
                                <span>
                                    ¿No tienes acceso?{" "}
                                    <Link to="/authentication/sign-up" className="ms-1">
                                        Registrarse
                                    </Link>
                                </span>
                            </div>
                            <div className="text-center mb-4">
                                <DarkLightMode />
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={12} className="mb-3">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="usuario"
                                            placeholder="Ingrese su Usuario"
                                            value={usuario}
                                            onChange={(e) => setUsuario(e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col lg={12} className="mb-3">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="contraseña"
                                            placeholder="Ingrese su Contraseña"
                                            value={contraseña}
                                            onChange={(e) => setContraseña(e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col lg={12} className="mb-3">
                                        <div className="d-md-flex justify-content-between align-items-center">
                                            <Form.Group
                                                className="mb-3 mb-md-0"
                                                controlId="formBasicCheckbox"
                                            >
                                                <Form.Check type="checkbox" label="Recordar" />
                                            </Form.Group>
                                            <Link to="/authentication/forget-password">
                                                ¿Olvidaste tu contraseña?
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="mb-0 d-grid gap-2">
                                        <Button variant="primary" type="submit">
                                            Iniciar Sesión
                                        </Button>
                                    </Col>
                                    {error && (
                                        <Col lg={12} className="mt-3">
                                            <div className="alert alert-danger">{error}</div>
                                        </Col>
                                    )}
                                </Row>
                            </Form>
                            <hr className="my-4" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SignIn;
