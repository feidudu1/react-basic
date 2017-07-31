import React, {Component,creatClass} from 'react';
import logo from './logo.svg';
import $ from 'jquery'
import './App.css';


class App1 extends Component {
    static defaultProps = {
        myDataProp: 'app1 默认属性'
    }
    render() {
        return (
            <div className="App1">
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}

export default App1;
