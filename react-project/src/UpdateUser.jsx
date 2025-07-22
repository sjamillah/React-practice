import React, {useContext} from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
    const { user, setUser } = useContext(UserContext)

    const handleChange = () => {
        setUser({...user, name: "Kingsley"})
    }
  return (
    <div>
      <button onClick={handleChange}>Update Name</button>
    </div>
  )
}

export default UpdateUser
