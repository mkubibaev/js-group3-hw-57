import React from 'react';

const CostAdd = props => {
	return (
		<div className="cost-add-form">
			<input
				type="text"
				placeholder="cost title"
			/>
			<input
				type="text"
				placeholder="cost price"
			/>
			<button>Add</button>
		</div>
	);
};

export default CostAdd;