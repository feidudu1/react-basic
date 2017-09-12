import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// react Component  纯ui组件
class Counter extends Component {
    render() {
        const { value, onIncreaseClick} = this.props;
        return (
            <div>
                <span> { value} </span>
                <button onClick={onIncreaseClick} > Increase </button>
            </div>
        )
    }
}
Counter.PropTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}
// 纯ui组件

// action
const increaseAction = {type: 'increase'};

// reducer
function counter( state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + 1};
            break;
        default:
            return state;
    }
}

// store
const store = createStore(counter);

// 容器组件
// map redux state to component props
function mapStateToProps(state){
    return {
        value: state.count
    }
}
// map redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}
// connected Component
const APP = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
// 容器组件

ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('root')
)
