import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { closeSideMenu } from './actions';
import ReactGA from 'react-ga';

const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history), // root reducer with router state
    applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunkMiddleware
    )
);

ReactGA.initialize('UA-132341438-1');
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(function (location) {
    ReactGA.pageview(location.pathname + location.search);
    store.dispatch(closeSideMenu());
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/">
                <App history={history}/>
            </Route>
        </ConnectedRouter>
        <ToastContainer autoClose={3000} hideProgressBar={true} />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
