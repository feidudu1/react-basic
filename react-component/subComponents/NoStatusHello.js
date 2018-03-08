import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 无状态组件
function NoStatusHello(props) {
  return <div>hello, {props.greetTarget}</div>
}

export default NoStatusHello;
