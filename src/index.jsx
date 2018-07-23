import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'app';

import createStore from 'redux/store';

const store = createStore();

ReactDOM.render((
    <AppContainer>
        <App store={store} />
    </AppContainer>
), document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./app', () => {
        const NewApp = require('./app').default;

        ReactDOM.render((
            <AppContainer>
                <NewApp store={store} />
            </AppContainer>
        ), document.getElementById('root'));
    });
}
