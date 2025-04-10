import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const LaunchDate = () => {
    const location = useLocation();
    const { prospecto } = location.state || {}; // Obtener prospecto del estado

    // Función para calcular los días transcurridos
    const calcularDiasDesdeIngreso = (fechaIngreso) => {
        const fechaIngresoDate = new Date(fechaIngreso);
        const fechaActual = new Date();

        // Validar si fechaIngreso es una fecha válida
        if (isNaN(fechaIngresoDate)) {
            return null; // Retornar null si no es válida
        }

        const diferenciaEnTiempo = fechaActual - fechaIngresoDate; // Diferencia en milisegundos
        const diferenciaEnDias = Math.floor(diferenciaEnTiempo / (1000 * 60 * 60 * 24)); // Convertir a días
        return diferenciaEnDias;
    };

    // Validar si la fecha es futura
    const esFechaFutura = (fechaIngreso) => {
        const fechaIngresoDate = new Date(fechaIngreso);
        const fechaActual = new Date();
        return fechaIngresoDate > fechaActual; // Retorna true si la fecha es futura
    };

    // Calcula los días transcurridos si hay fecha de ingreso
    const diasDesdeIngreso = prospecto && prospecto.fecha ? calcularDiasDesdeIngreso(prospecto.fecha) : null;
    const fechaEsFutura = prospecto && prospecto.fecha ? esFechaFutura(prospecto.fecha) : false;

    return (
        <Card className="mb-4 bg-primary border-primary">
            <Card.Body>
                <Card.Title className="text-white" as="h4">
                    Fecha De Ingreso
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-8">
                    <div>
                        {/* Muestra los detalles del prospecto */}
                        {prospecto ? (
                            <>
                                {fechaEsFutura ? (
                                    <h1 className="display-4 text-danger mb-1">Fecha Inválida</h1>
                                ) : (
                                    <h1 className="display-4 text-white mb-1">
                                        {diasDesdeIngreso !== null ? `${diasDesdeIngreso} Días` : "Fecha de ingreso no válida"}
                                    </h1>
                                )}
                                {/* Muestra la fecha de ingreso */}
                                <p className="mb-0 text-white">
                                    {prospecto.fecha ? new Date(prospecto.fecha).toLocaleDateString() : "Fecha no disponible"}
                                </p>
                                {/* Muestra la hora si está disponible */}
                                <p className="mb-0 text-white">
                                    {prospecto.hora ? prospecto.hora : "Hora no disponible"}
                                </p>
                            </>
                        ) : (
                            <p className="text-white">No hay información de prospecto disponible.</p>
                        )}
                    </div>
                    <div>
                        <i className="fe fe-flag fs-1 text-light-primary"></i>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LaunchDate;
