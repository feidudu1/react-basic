// 组件样式的组织

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 工厂模式
const LifeCircle = React.createClass({
  getDefaultProps: function () {
    console.log('getDefaultProps: receive props from outsize');
    return {};
  },
  getInitialState: function () {
    console.log('getInitialState: set default state object');
    return {
      count: 0
    };
  },
  componentWillMount: function () {
    console.log('componentWillMount: component will about to mount');
    return;
  },
  componentDidMount: function () {
    console.log('componentDidMount: component is just mount');
    return;
  },
  increase: function () {
    this.setState({
      count: this.state.count + 1
    })
  },
  shouldComponentUpdate: function (newProps, newState) {
    console.log('shouldComponentUpdate: should component update?');
    if (newState.count < 5) {
      console.log('component should update');
      return true;
    } else {
      console.log('component should not update');
      // ReactDOM.unmountComponentAtNode(document.getElementById('root')) //调用unmount函数
      return false;
    }
  },
  componentWillUpdate: function () {
    console.log('componentWillUpdate: component is about update');
    return;
  },
  componentDidUpdate: function () {
    console.log('componentDidUpdate: component is just updated');
    return;
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount: component is removed from dom');
    return;
  },
  render: function () {
    return (
      <div>
        <div>{this.state.count} </div>
        <button onClick={this.increase}>click</button>
      </div>
    )
  }
})

export default LifeCircle;
