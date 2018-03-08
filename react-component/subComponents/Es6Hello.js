import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// es6语法定义
class Es6Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        hello, {this.props.greetTarget}
      </div>
    )
  }
}

export default Es6Hello;
