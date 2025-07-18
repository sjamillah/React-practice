import React from 'react'
import { useState, useEffect } from 'react';

const BasicEffect = () => {
    const [message, setMessage] = useState('')
    useEffect(() => {
        console.log("Message is added")
    }, [])
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Welcome to our page")}>Click Me</button>
    </div>
  )
}

export default BasicEffect
