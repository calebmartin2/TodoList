import React from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { CurrentTasks } from './components/CurrentTasks';
import { CompletedTasks } from './components/CompletedTasks';
import PageNotFound from './components/PageNotFound';
import './custom.css'

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route exact path='/' component={CurrentTasks} />
                    <Route path='/completed' component={CompletedTasks} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;