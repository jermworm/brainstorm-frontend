import React, { useState } from 'react'

function CreateProject () {
  const [count, setCount] = useState(0)
  return (
    <div className='create-form'>
      <p>You clicked {count} times</p>
      <form onSubmit>
        <input type='text' placeholder='Project title.' />
        <input type='text' placeholder='Project description' />
      </form>
      <button onClick={() => setCount(count + 1)} />
    </div>
  )
}

export default CreateProject
