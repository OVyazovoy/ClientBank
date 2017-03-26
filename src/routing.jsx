import React from 'react';
import { Router } from 'react-router';
import App from './containers/AppContainer';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

const routes =  {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                System.import('./containers/PageContainer')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: 'dynamic',
            getComponent(location, cb) {
                System.import('./components/Dynamic')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ]
};

export default (props) => {
    return <Router history={props.history} routes={routes} />
};