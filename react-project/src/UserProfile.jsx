import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {
    const { user } = useContext(UserContext)
  return (
    <div>
      <p>The student is {user.name}.</p>
      <p>He is {user.age} years old.</p>
      <p>He is graded {user.class}.</p>
    </div>
  )
}

export default UserProfile
