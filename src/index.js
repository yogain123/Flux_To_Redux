import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createAppStore } from './ReduxStore/AppStore';

ReactDOM.render( <Provider store={createAppStore()}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
