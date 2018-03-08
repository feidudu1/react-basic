import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ThreeBasicComponent from './components/ThreeBasicComponent'
import FactoryLetter from './components/FactoryLetter'
import LifeCircle from './components/LifeCircle'

// es6语法定义
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ThreeBasicComponent />
        <FactoryLetter bgcolor="#58b3ff">工厂模式1</FactoryLetter>
        <FactoryLetter bgcolor="#ff605f">工厂模式2</FactoryLetter>
        <LifeCircle />
      </div>
    )
  }
}

export default Main;
