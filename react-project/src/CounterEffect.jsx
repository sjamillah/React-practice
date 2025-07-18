import React from 'react'
import { useState, useEffect } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Added by 1")
        document.title = `Incremented to ${count}`
    }, [count])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  )
}

export default CounterEffect
