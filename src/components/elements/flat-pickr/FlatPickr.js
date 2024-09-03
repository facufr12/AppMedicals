/**************************************
Component : Flat Picker ( Date Picker )
***************************************

Availalble Parameters

value        	: Optional, value='' will show placeholder, if omit value it will show current date
placeholder     : Optional, default placeholder = Select Date

*/

// import node module libraries
import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import PropTypes from 'prop-types';

export const FlatPickr = ({ value, placeholder = 'Select Date' }) => {
	const [picker] = useState(new Date());
	return (
		<Flatpickr
			value={value === '' ? '' : value ? value : picker}
			placeholder={placeholder}
			className="form-control"
		/>
	);
};

// ** PropTypes
FlatPickr.propTypes = {
	placeholder: PropTypes.string
};