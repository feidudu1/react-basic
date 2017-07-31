import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App source="https://api.github.com/users/octocat/gists"/>,
    // <App name="yafei-props"/>,
    document.getElementById('root')
);
registerServiceWorker();
