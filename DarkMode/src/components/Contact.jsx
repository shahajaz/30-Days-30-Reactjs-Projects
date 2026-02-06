import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" placeholder='Enter your name' />
      </div>

      <div>
        <label>Password</label>
        <input type="password" placeholder='Enter your password' />
      </div>

      <button type="submit">Submit</button>
    </div>
  )
}

export default Contact
