import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { CurrentList } from './components/CurrentList';
import './custom.css'

function App() {
    return (
        <div className="App">
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/list' component={CurrentList} />
            </Layout>
        </div>
    );
}

export default App;