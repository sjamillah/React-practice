import React, { useRef, useState } from 'react'

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(0) // display time
    const inputRef = useRef(0) // get the user's input
    const timerRef = useRef(null) // store interval ID

    const setTimer = () => {
        const userValue = parseInt(inputRef.current.value)

        if(isNaN(userValue) || userValue < 0) {
            alert("Please input valid time")
            return;
        }

        setTimeLeft(userValue)

        if(timerRef.current) {
            clearInterval(timerRef.current)
        }
        
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if(prev <= 1) {
                    clearInterval(timerRef.current)
                    console.log("Time over")
                    return 0
                }
                return prev - 1;
            })
        }, 1000)
    }
  return (
    <div>
        <h1>Time left: {timeLeft}</h1>
      <input type="number" ref={inputRef} placeholder='Enter time in seconds'/>
      <button onClick={setTimer}>Set Timer</button>
    </div>
  )
}

export default Timer
