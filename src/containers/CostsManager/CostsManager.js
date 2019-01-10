import React, {Component} from 'react';
import CostAdd from "../../components/CostAdd/CostAdd";
import CostList from "../../components/CostList/CostList";

const CATEGORIES = [
	{id: 1, name: 'Entertainment', color: 'brown'},
	{id: 2, name: 'Car', color: 'darkcyan'},
	{id: 3, name: 'Food', color: 'orange'}
];

class CostsManager extends Component {
    state = {
        costTitle: '',
        costPrice: '',
		costCategory: '',
        costList: [],
        sum: 0,
    };

	inputCostTitle = event => {
		this.setState({costTitle: event.target.value});
	};

	inputCostPrice = event => {
		const costPriceStr = event.target.value;
		const costPriceNum = +costPriceStr;

		if (costPriceNum) {
			this.setState({costPrice: costPriceNum});
		} else {
			this.setState({costPrice: ''})
		}

	};

	selectCostCategory = event => {
		this.setState({costCategory: event.target.value});
	};

	addCost = () => {
		if (this.state.costTitle && this.state.costPrice && this.state.costCategory) {
			const date = new Date();
			const costList = [...this.state.costList];
			const oldSum = this.state.sum;
			const sum = oldSum + this.state.costPrice;
			const newCost = {
				id: date.toISOString(),
				title: this.state.costTitle,
				price: this.state.costPrice,
				category: this.state.costCategory
			};

			costList.push(newCost);

			this.setState({
				costList,
				costTitle: '',
				costPrice: '',
				costCategory: '',
				sum
			});
		} else {
			alert('All fields required!');
		}
	};

	removeCost = id => {
		const costList = [...this.state.costList];
		const oldSum = this.state.sum;
		const costIndex = costList.findIndex(cost => cost.id === id);
		const costPrice = costList[costIndex].price;
		const sum = oldSum - costPrice;

		costList.splice(costIndex, 1);

		this.setState({
			costList,
			sum
		});
	};

    render() {
        return (
            <div className="container">
                <CostAdd
					currentTitle={this.state.costTitle}
					currentPrice={this.state.costPrice}
					currentCategory={this.state.costCategory}
					onInputTitle={(event) => this.inputCostTitle(event)}
					onInputPrice={(event) => this.inputCostPrice(event)}
					onSelectCategory={(event) => this.selectCostCategory(event)}
					categories={CATEGORIES}
					addCost={this.addCost}
                />
                <CostList
					list={this.state.costList}
					remove={this.removeCost}
					totalSpent={this.state.sum}
                />
            </div>
        )
    }
}

export default CostsManager;
