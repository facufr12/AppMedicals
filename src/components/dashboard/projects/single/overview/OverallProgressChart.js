// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files

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
