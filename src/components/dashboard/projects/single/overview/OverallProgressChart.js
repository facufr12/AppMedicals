// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// Define opciones del gráfico
const OverallProgressChartOptions = {
	chart: {
		type: 'radialBar',
	},
	colors: ['#008FFB', '#00E396', '#FEB019'],
	plotOptions: {
		radialBar: {
			offsetY: 0,
			startAngle: -135,
			endAngle: 135,
			dataLabels: {
				name: {
					fontSize: '22px',
					color: undefined,
					offsetY: 5,
				},
				value: {
					fontSize: '16px',
					color: '#99A2A8',
					offsetY: -15,
				},
			},
		},
	},
	labels: ['Task Completion', 'Team Efficiency', 'Quality Assurance'],
};

// Define los datos de las series
const OverallProgressChartSeries = [75, 60, 85]; // Ejemplo de porcentajes

const OverallProgressChart = () => {
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
