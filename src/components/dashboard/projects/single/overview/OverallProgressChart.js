// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

const OverallProgressChart = () => {
	// Define las opciones y series aquí
	const OverallProgressChartOptions = {
		chart: {
			type: 'radialBar',
		},
		// Otras opciones que necesites...
		labels: ['Progress'],
	};

	const OverallProgressChartSeries = [75]; // Ejemplo de serie de datos

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
