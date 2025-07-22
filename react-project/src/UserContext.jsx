import React, { createContext, useState } from 'react'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()

const UserProvider = () => {
  const [user, setUser] = useState({ name: "Marvel", age: 23, class: "First class" })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserProfile />
      <UpdateUser />
    </UserContext.Provider>
  )
}

export default UserProvider
