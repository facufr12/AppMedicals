import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ApexCharts from 'components/elements/charts/ApexCharts';

const OverallProgressChart = () => {
    const location = useLocation();
    const prospecto = location.state?.prospecto; // Usar encadenamiento opcional

    // Definir opciones para el gráfico radial
    const OverallProgressChartOptions = {
        chart: {
            type: 'radialBar',
        },
        labels: ['Progreso'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '20px',
                        color: '#ffffff', // Color del nombre
                    },
                    value: {
                        fontSize: '16px',
                        color: '#ffffff', // Color del porcentaje
                    },
                },
            },
        },
    };

    // Usar el dato de evolución del prospecto como serie de datos
    const OverallProgressChartSeries = [prospecto?.evolucion || 0]; // Si evolucion es undefined, usar 0

    return (
        <Card className="mb-4">
            <Card.Body>
                <h4 className="mb-3">Evolución Del Prospecto</h4>
                <ApexCharts
                    options={OverallProgressChartOptions}
                    series={OverallProgressChartSeries}
                    type="radialBar"
                    height={350}
                />
                {prospecto && (
                    <div className="mt-3 text-center">
                        <h5>{`Prospecto: ${prospecto.nombre}`}</h5>
                        <p>{`Evolución: ${prospecto.evolucion ? `${prospecto.evolucion}%` : 'No disponible'}`}</p>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default OverallProgressChart;
