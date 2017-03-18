import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import Style from './assets/styles/index.scss'
import { I18nextProvider } from 'react-i18next';

const store = configureStore();
import i18n from './i18n'; // initialized i18next instance

render(

    <I18nextProvider i18n={ i18n }>
        <Provider store={store}>
            <div className={Style.main}>
                <App />
            </div>
        </Provider>
    </I18nextProvider>,

    document.getElementById('root')
);

