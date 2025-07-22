import React, { useId } from 'react'

// useId is used to generate unique ids for elements
const UseIdApp = () => {
    const id = useId()
  return (
    // we add the -after the id because even if we say the id is unique it isn't
    // instead we use the prefix behind it to make sure that it's different
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`{${id}-email}`} />
      <br />

      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`{${id}-password}`} />
    </div>
  )
}

export default UseIdApp
