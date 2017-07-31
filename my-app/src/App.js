import React, {Component,creatClass} from 'react';
import logo from './logo.svg';
import $ from 'jquery'
import './App.css';
import App1 from './App1';

class App extends Component {
    // getInitialState在es6语法中不能用
    // getInitialState: function() {
    //   return {liked: false};
    // },
    // 可以用以下替代
    // constructor(props){
    //     super();
    //     this.state = {
    //         liked:false
    //     };
    // };
    // 或者用
    state = {
        liked: false,
        clickcount: 0,
        opacity: 1.0,
        username: '',
        lastGistUrl: '',
        value: 'haha',
        value1: '子组件'
    };

    // 同样，以下也不起作用
    // getDefaultProps(){
    //     return {
    //         name:'feifei'
    //     }
    // };
    // 可以用
    static defaultProps = {
        name: 'feifei',
        title: 'react practice',
        // title: 123,
    }
    static propTypes = {
        title: React.PropTypes.string.isRequired
    }

// 两次点击事件不能用同一个属性名，并且写到同一个属性的函数里，否则点击任何一个都会触发另一个的事件
    handleClick(event){
        this.setState({
            liked:!this.state.liked,
            // clickcount: this.state.clickcount + 1
        });
    };
    handleClickCount(event){
        this.setState({
            // liked:!this.state.liked,
            clickcount: this.state.clickcount + 1
        });
    };
    handleClickInput(event){
        this.refs.myInput.focus();
    };
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    };
    handleChange2(event){
        this.setState({
            value1: event.target.value
        });
    };
    componentDidMount(){
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            })
        }.bind(this),100);
        this.serverRequest = $.get(this.props.source,function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    };
    componentWillUnmount(){
        this.serverRequest.abort();
    };
    render() {
        var i = 3;
        var myStyle = {
            fontSize: 100,
            color: '#ff0000'
        }
        var array = [
            <h1 key = '1' > hi </h1>,
            <h2 key='2'>world</h2>
        ];
        var text = this.state.liked ? '喜欢':'不喜欢';
        var value = this.state.value;
        var value1 = this.state.value1;

        var myDivElement = <stong className="foo">23333r</stong>;
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <p onClick={this.handleClick.bind(this)}>你<b>{text}</b>{this.props.name}（点我切换状态）</p>
                <p onClick={this.handleClickCount.bind(this)}>点我！点击次数为：{this.state.clickcount}</p>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 data-myattribute="somevalue">Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <p style={{myStyle,opacity:this.state.opacity}}>{i = 3
                        ? 'true'
                        : 'false'}</p>
                <div>
                    <div>{array}</div>
                </div>
                {myDivElement}
                <h2>{this.props.name}</h2>
                <h2>
                    {this.state.username} 用户最新的gist共享地址：
                    <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
                </h2>
                <input type="text" value={value} onChange={this.handleChange.bind(this)} />
                <h4>{value}</h4>
                <h1>子组件</h1>
                {/* <App1 myDataProp={value1} updateStateProp={this.handleChange2.bind(this)}/> */}
                <App1  updateStateProp={this.handleChange2.bind(this)}/>
                <h1>refs例子</h1>
                <input type="text" ref="myInput"/>
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClickInput.bind(this)} />
            </div>
        );
    }
}

export default App;
