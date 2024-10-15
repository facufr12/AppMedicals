import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const LaunchDate = () => {
    const location = useLocation();
    const prospecto = location.state?.prospecto; // Usar encadenamiento opcional

    // Calcular los días transcurridos
    const calcularDiasDesdeFecha = (fecha) => {
        const fechaLanzamiento = new Date(fecha);
        const hoy = new Date();
        const diferenciaTiempo = hoy - fechaLanzamiento; // Diferencia en milisegundos
        const diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)); // Convertir a días
        return diasTranscurridos;
    };

    return (
        <Card className="mb-4 bg-primary border-primary">
            <Card.Body>
                <Card.Title className="text-white" as="h4">
                    Fecha de Lanzamiento
                </Card.Title>
                {prospecto ? (
                    <>
                        <h1 className="text-white">
                            {calcularDiasDesdeFecha(prospecto.fecha)} días
                        </h1>
                        <span className="text-white">
                            {`Fecha de Inicio: ${new Date(prospecto.fecha).toLocaleDateString()}`}
                        </span>
                    </>
                ) : (
                    <p className="text-white">No se encontró información del prospecto.</p>
                )}
            </Card.Body>
        </Card>
    );
};

export default LaunchDate;
