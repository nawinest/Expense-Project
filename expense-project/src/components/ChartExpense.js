import React, { Component } from 'react';
import PieChartExpense from './Charts/PieChartExpense';

class ChartExpense extends Component {
    state = {}

    render() {
        const data = [
            { name: 'Deposit', value: 400 },
            { name: 'Withdraw', value: 300 },
        ];
        return (
            <div className="chart-wrapper">
                <div className="topic-chart">
                    Chart Summary
                </div>
                <div>
                    <div className="summary-chart">
                        <PieChartExpense data={data} />
                        <h6>Summary</h6>
                    </div>
                </div>

            </div>

        )
    }
}

export default ChartExpense;