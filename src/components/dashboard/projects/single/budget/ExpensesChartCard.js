// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files

const ExpensesChartCard = () => {
	return (
		<Card className="h-100">
			<Card.Body>
				<h4 className="mb-3">Expenses</h4>
				<ApexCharts
					options={BudgetExpenseChartOptions}
					series={BudgetExpenseChartSeries}
					type="radar"
				/>
			</Card.Body>
		</Card>
	);
};

export default ExpensesChartCard;
