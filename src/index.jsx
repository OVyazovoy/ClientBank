import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import Routing from './routing'
import Style from './assets/styles/index.scss'
import { I18nextProvider } from 'react-i18next';

/**
 * Настраиваем хранилище
 */
const store = configureStore();
import i18n from './libs/i18n'; // initialized i18next instance

/**
 * Добавляем роутинг в redux
 */
const history = syncHistoryWithStore(hashHistory, store);

render(
    <I18nextProvider i18n={ i18n }>
       <Provider store={store}>
          <div className={Style.main}>
            <Routing history={history}/>
          </div>
        </Provider>,
    </I18nextProvider>,
    document.getElementById('root')
);

/**
 * Для локальной сборки
 */
if (module.hot) {
    module.hot.accept('./routing', () => {
        const NewRoot = require('./routing').default;
        render(
            <NewRoot />,
            document.getElementById('root')
        );
    });
}