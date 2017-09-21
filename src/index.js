import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './containers/app';
import configureStore from './store/configureStore';
import ContextProvider from './components/ContextProvider'

const store = configureStore();
const context = {
    insertCss: styles => styles._insertCss(),
};

const renderComp = Component =>{
    render(
        <ContextProvider className="container" context={context}>
            <AppContainer>
                <Provider store={store}>
                    <Component />
                </Provider>
            </AppContainer>
        </ContextProvider>,
        document.getElementById('root')
    );
};

renderComp(App);

if (module.hot) {
    module.hot.accept('./containers/app', () => { renderComp(App) })
}