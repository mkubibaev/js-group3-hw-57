import React, {Component} from 'react';
import CostAdd from "../../components/CostAdd/CostAdd";
import CostList from "../../components/CostList/CostList";
import CostChart from "../../components/CostChart/CostChart";

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
        chartSectors: []
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

			this.calcChartSectors(costList, sum);
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

	calcChartSectors = (costList, sum) => {
	    const chartPercents = costList.reduce((acc, cost) => {
	        if (cost.category in acc) {
				acc[cost.category] += (cost.price * 100 / sum);
            } else {
				acc[cost.category] = (cost.price * 100 / sum);
            }

	        return acc;
        }, {});

		const chartSectors = Object.keys(chartPercents).map(chart => {
		    return {
		        name: chart,
		        value: chartPercents[chart],
                color: CATEGORIES.find(category => category.name === chart).color,
            }

        });

	    this.setState({chartSectors});
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
				<CostChart
					categories={CATEGORIES}
                    charts={this.state.chartSectors}
                />
            </div>
        )
    }
}

export default CostsManager;
