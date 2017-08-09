var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },
    componentDidMount: function () {
        ListStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        ListStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            items: ListStore.getAll()
        });
    },
    createNewItem: function (event) {
        ButtonActions.addNewItem('new item');
    },
    render: function () {
        return <MyButton onClick={this.createNewItem} items={this.state.items}/>;
    }
})

module.exports = MyButtonController;
