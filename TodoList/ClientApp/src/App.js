import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { CurrentTasks } from './components/CurrentTasks';
import { CompletedTasks } from './components/CompletedTasks';
import './custom.css'

function App() {
    return (
        <div className="App">
            <Layout>
                <Route exact path='/' component={CurrentTasks} />
                <Route path='/completed' component={CompletedTasks} />
            </Layout>
        </div>
    );
}

export default App;