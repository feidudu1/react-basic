import React, { Component } from 'react-redux';
import { loadState, saveState } from './localStorage';

class Counter extends Component {
    render(){
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span> {value} </span>
                <button onClick={onIncreaseClick}> Increase </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}
const increaseAction = {type: 'increase'}

const APP = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

function counter( state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + 1}
            break;
        default:
            return state;
    }
}

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
)

store.subscribe(throttle( () => {
    saveState({
        todos: store.getState().todos,
    })
},1000))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


const VisibleTodoList = connet(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
            break;
        case 'SHOW_COMPLETED':
            return todos.filter( t => t.completed)
            break;
        case 'SHOW_ACTIVE':
            return todos.filter( t => !t.completed)
            break;
        default:
            throw new Error('unknown fileter:' + filter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            })
        }
    }
}

const fetchPosts =
    (dispatch, postTitle) => new Promise(function (resolve, reject) {
        dispatch(requestPosts(postTitle));
        return fetch(`/some/API/${postTitle}.json`)
            .then(response => {
                type: 'FETCH_POSTS',
                payload: reponse.json()
            })

    })


import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(logger);
)


import React, { Component } from 'react';

const Counter = ({ value }) => (
    <h1> {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
);

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement = { () => store.dispatch({type: 'INCREMENT'}) }
            onDecrement = { () => store.dispatch({type: 'DECREMENT'}) }
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();
