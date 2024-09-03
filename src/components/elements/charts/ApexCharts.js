// import node module libraries
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

const ApexCharts = ({ options, series, width, type = 'line', height }) => {
	return (
		<Chart
			options={options}
			series={series}
			type={type}
			width={width}
			height={height}
		/>
	);
};

// ** PropTypes
ApexCharts.propTypes = {
	options: PropTypes.object.isRequired,
	series: PropTypes.array.isRequired,
	type: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
};

export default ApexCharts;
