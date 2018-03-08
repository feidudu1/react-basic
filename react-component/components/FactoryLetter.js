// 组件样式的组织

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 工厂模式
const FactoryLetter = React.createClass({
  // propTypes: {
  //   greetTarget: React.PropTypes.string
  // },
  // defaultProps: {
  //   greetTarget: 'default'
  // },
  render: function () {
    var letterStyle = {
      padding: 10,
      margin: 10,
      background: this.props.bgcolor,
      color: '#333',
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: 32,
      textAlign: 'center'
    }
    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    )
  }
})

export default FactoryLetter;
