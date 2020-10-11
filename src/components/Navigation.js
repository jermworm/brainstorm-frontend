import React from 'react'
import '../css/nav.css'

function Navigation (props) {

  return (
    <div className='header'>
      <h1>Brainstorm</h1>
      <nav>
        <ul className='nav-links'>
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Notifactions</li>
          <li>{props.loggedIn ? props.user : `Username`}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
