import React from 'react';
import Cost from "./Cost/Cost";

const CostList = props => {
	return (
		<div className="cost-list">
			<div className="cost-list-top">
				{props.list.map((cost) => (
					<Cost
						key={cost.id}
						title={cost.title}
						price={cost.price}
						category={cost.category}
						remove={() => props.remove(cost.id)}
					/>
				))}
			</div>
			<div className="cost-list-bottom">
				<span>Total spent: <strong>{props.totalSpent} KGS</strong></span>
			</div>
		</div>
	);
};

export default CostList;