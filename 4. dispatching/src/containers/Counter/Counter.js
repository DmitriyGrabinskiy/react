import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../../store/Enum/ActionTypes'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=> this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={()=> this.props.onSubtractCounter(5)}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: ActionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: ActionTypes.DECREMENT}),
        onAddCounter: (value) => dispatch({type: ActionTypes.ADD, value: value}),
        onSubtractCounter: (value) => dispatch({type: ActionTypes.SUBTRACT, value: value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);