import React, {Component} from 'react';
import CostAdd from "../../components/CostAdd/CostAdd";
import CostList from "../../components/CostList/CostList";


class CostsManager extends Component {
    state = {
        costTitle: '',
        costPrice: '',
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

	addCost = () => {
		if (this.state.costTitle && this.state.costPrice) {
			const date = new Date();
			const costList = [...this.state.costList];
			const oldSum = this.state.sum;
			const sum = oldSum + this.state.costPrice;
			const newCost = {
				id: date.toISOString(),
				title: this.state.costTitle,
				price: this.state.costPrice
			};

			costList.push(newCost);

			this.setState({
				costList,
				costTitle: '',
				costPrice: '',
				sum
			});
		} else {
			alert('All fields required!');
		}
	};

    render() {
        return (
            <div className="container">
                <CostAdd
					currentTitle={this.state.costTitle}
					currentPrice={this.state.costPrice}
					onInputTitle={(event) => this.inputCostTitle(event)}
					onInputPrice={(event) => this.inputCostPrice(event)}
					addCost={this.addCost}
                />
                <CostList
					list={this.state.costList}
					totalSpent={this.state.sum}
                />
            </div>
        )
    }
}

export default CostsManager;
