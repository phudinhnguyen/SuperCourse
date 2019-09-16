import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter, Route } from 'react-router-dom';
import courseDetail from './courseDetail';
import signUp from './signUp';
import signIn from './signIn';

// scss
// import "./style/main.scss";

//create store
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/blog/:id" component={courseDetail} />
            <Route exact path="/sign-up" component={signUp} />
            <Route exact path="/sign-in" component={signIn} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
