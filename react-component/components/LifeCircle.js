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
    return {};
  },
  componentWillMount: function () {
    console.log('componentWillMount: component will about to mount');
    return;
  },
  componentDidMount: function () {
    console.log('componentDidMount: component is just mount');
    return;
  },
  render: function () {
    var s = 'countParent rendering...'
    return (
      <div>
        s
      </div>
    )
  }
})

export default LifeCircle;
