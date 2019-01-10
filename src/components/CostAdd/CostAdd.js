import React from 'react';

const CostAdd = props => {
	return (
		<div className="cost-add-form">
			<input
				onChange={props.onInputTitle}
				value={props.currentTitle}
				type="text"
				placeholder="cost title"
			/>
			<input
				onChange={props.onInputPrice}
				value={props.currentPrice}
				type="text"
				placeholder="cost price"
			/>
			<button onClick={props.addCost}>Add</button>
		</div>
	);
};

export default CostAdd;