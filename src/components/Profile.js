import React from 'react'
import '../css/profile.css'

function Profile () {
  return (
    <div className='profile-container'>
      <h1>This is the a form page</h1>
      <div className='stat-column'>
        <ul className='left-bar'>
          <li id='pic' />
          <li id='stat'>Stat</li>
          <li id='stat'>Stat</li>
          <li id='stat'>Stat</li>
          <li id='stat'>Stat</li>
          <button>Edit Profile</button>
        </ul>
      </div>
    </div>
  )
}

export default Profile
