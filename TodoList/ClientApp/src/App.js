import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { CurrentTasks } from './components/CurrentTasks';
import './custom.css'

function App() {
    return (
        <div className="App">
            <Layout>
                <Route path='/' component={CurrentTasks} />
            </Layout>
        </div>
    );
}

export default App;