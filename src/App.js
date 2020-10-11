import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import CreateProject from './components/CreateProject';
import Dashboard from './components/Dashboard'
import Navigation from './components/Navigation';
import Profile from './components/Profile'

function App () {
  return (
    <div className='App'>
      <Navigation />
      <Router>
        <Route path='/' exact component={Dashboard} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/projects/create' exact component={CreateProject} />
      </Router>

    </div>
  )
}

export default App
