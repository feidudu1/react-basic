import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 无状态组件
function NoStatusHello(props) {
  return <div>hello, {props.greetTarget}</div>
}

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

ReactDOM.render(
    <div>
      <NoStatusHello greetTarget='无状态组件' />
      <FactoryHello greetTarget='工厂模式' />
      <Es6Hello greetTarget='es6模式' />
    </div>
      ,
    document.getElementById('root')
)
