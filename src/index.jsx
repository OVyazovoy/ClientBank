import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import Routing from './routing'
import Style from './assets/styles/index.scss'

/**
 * Настраиваем хранилище
 */
const store = configureStore();

/**
 * Добавляем роутинг в redux
 */
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <div className={Style.main}>
            <Routing history={history}/>
        </div>
    </Provider>,
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