import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import Todo from './containers/todolist/Todo'
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas'
const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(thunk, saga)));
saga.run(sagaWatcher);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Todo />
                </Layout>
            </Provider>
        )
    }
}


export default App