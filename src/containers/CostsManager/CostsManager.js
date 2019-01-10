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


    render() {
        return (
            <div className="container">
                <CostAdd/>
                <CostList/>
            </div>
        )
    }
}

export default CostsManager;
