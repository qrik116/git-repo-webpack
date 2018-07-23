import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContainer from 'containers/App';

export default class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={AppContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
