import React from 'react';

const DataDisplay = (props) => {
	const {data} = props
	return (
		<div>
			{Object.keys(data).map((date) =>
			<div key={date}>Date: {date} Value: {data[date]}</div>)}
		</div>
	);
}

export default DataDisplay;