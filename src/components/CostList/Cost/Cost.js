import React from 'react';

const Cost = props => {
	return (
		<div className="cost">
			<span className="cost-title">{props.title}</span>
			<span>{props.category}</span>
			<div>
				<span>{props.price} KGS</span>
				<button onClick={props.remove}>x</button>
			</div>
		</div>
	);
};

export default Cost;