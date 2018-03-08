import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NoStatusHello from '../subComponents/NoStatusHello';
import FactoryHello from '../subComponents/FactoryHello';
import Es6Hello from '../subComponents/Es6Hello';

// es6语法定义
class ThreeBasicComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NoStatusHello greetTarget='无状态组件' />
        <FactoryHello greetTarget='工厂模式' />
        <Es6Hello greetTarget='es6模式' />
      </div>
    )
  }
}

export default ThreeBasicComponent;
