import React from 'react';

const Cost = props => {
	return (
		<div className="cost">
			<span>{props.title}</span>
			<div>
				<span>{props.price} KGS</span>
				<button>x</button>
			</div>
		</div>
	);
};

export default Cost;