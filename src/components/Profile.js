import React from 'react'
import '../css/profile.css'


function Profile (props) {

  console.log(props)

  return (
    <div className='profile-container'>
      <div className='stat-column'>
        <ul className='left-bar'>
          <h1>{props.user}</h1>
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
