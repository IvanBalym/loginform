import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';

const target = document.getElementById('root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    target
);

serviceWorker.register();
