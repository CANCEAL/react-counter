import React, { Component } from 'react';
import Counter from "./Counter";
import CounterGroupSum from './CounterGroupSum';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);

        this.state = {
            value: 0,
            sum: 0
        };
    }

    onChange(event) {
        this.setState(() => {
        return {value: event.target.value};
        });
    }

    counterArray(size) {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number));
    }

    addCount = (sumOfCounters) => {
        this.setState((prevState) => ({sum : prevState.sum + sumOfCounters}));
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Counter Size Generator</legend>
                    <label>Size: </label>
                    <input type="number"
                           onChange={this.onChange}
                           value={this.state.value}>
                    </input>
                    
                    <CounterGroupSum sumOfCounters={this.state.sum}/>
                </fieldset>

                {this.counterArray(this.state.value).map(() => <Counter addCount={this.addCount}/>)}
            </div>
        );
    }
}

export default CounterSizeGenerator;