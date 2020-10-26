import React, { Component } from 'react';

class CounterGroupSum extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label> Sum of all counters: {this.props.sumOfCounters} </label>
            </div>
        );
    }
}

export default CounterGroupSum;