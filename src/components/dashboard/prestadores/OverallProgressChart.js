// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

const OverallProgressChart = () => {
  // Definimos opciones de configuración para ApexCharts
  const OverallProgressChartOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Overall',
            formatter: function () {
              return '80%'; // puedes personalizar el porcentaje total aquí
            },
          },
        },
      },
    },
    labels: ['Progress 1', 'Progress 2', 'Progress 3'],
    colors: ['#FF4560', '#00E396', '#008FFB'],
  };

  // Definimos los datos de la serie para el gráfico
  const OverallProgressChartSeries = [75, 50, 90]; // Valores de ejemplo para cada sección de progreso

  return (
    <Card className="mb-4">
      <Card.Body>
        <h4 className="mb-3">Overall Progress</h4>
        <ApexCharts
          options={OverallProgressChartOptions}
          series={OverallProgressChartSeries}
          type="radialBar"
          height={350}
        />
      </Card.Body>
    </Card>
  );
};

export default OverallProgressChart;
