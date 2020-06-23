import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import Todo from './containers/todolist/Todo'
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux';
const store = createStore(rootReducer)

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