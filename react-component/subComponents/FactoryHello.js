import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 工厂模式
const FactoryHello = React.createClass({
  propTypes: {
    greetTarget: React.PropTypes.string
  },
  defaultProps: {
    greetTarget: 'default'
  },
  render: function () {
    return (
      <div>
        hello, {this.props.greetTarget}
      </div>
    )
  }
})

export default FactoryHello;
