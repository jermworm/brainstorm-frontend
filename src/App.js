import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import CreateProject from './components/CreateProject';
import Dashboard from './components/Dashboard'
import Navigation from './components/Navigation';
import Profile from './components/Profile'


function App () {

  const [username, setUsername] = useState('armideonokawa')
  const [isLoggedIn, setIsLoggedIn] = useState('true')

  console.log(isLoggedIn)

  function renderHome () {
    if (isLoggedIn){
      return <Profile user={username}/>
    }else{
      return <Dashboard />
    }
  }
  return (
    <div className='App'>
      <Navigation user={username} loggedIn={isLoggedIn} />
      <Router>
        <Route path='/' render={renderHome} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/projects/create' exact component={CreateProject} />
      </Router>
    
    </div>
  )
}

export default App
