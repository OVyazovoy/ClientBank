import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import Style from './assets/styles/index.scss'

const store = configureStore();

render(
    <Provider store={store}>
        <div className={Style.main}>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);

