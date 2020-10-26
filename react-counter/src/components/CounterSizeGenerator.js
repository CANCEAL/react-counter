import React, { Component } from 'react';
import Counter from "./Counter";

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);

        this.state = {
            size: 0,
        }
    }

    onChange(event) {
        this.setState(() => {
        return {size: event.target.value};
        });
    }

    counterArray(size) {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number));
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Counter Size Generator</legend>
                    <label>Size: </label>
                    <input type="number" onChange={this.onChange} value={this.state.size}></input>
                </fieldset>
                
                {this.counterArray(this.state.size).map(() => <Counter />)}
            </div>
        );
    }
}

export default CounterSizeGenerator;