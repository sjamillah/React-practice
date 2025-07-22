import React, { useRef, useState } from 'react'

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(0) // display the countdown
    const inputRef = useRef(0) // get the user's input
    const timerRef = useRef(null) // store interval ID so we can stop it

    const setTimer = () => {
        const userValue = parseInt(inputRef.current.value)

        if(isNaN(userValue) || userValue < 0) {
            alert("Please input valid time")
            return;
        }

        // set the initial countdown
        setTimeLeft(userValue)

        // clears existing time before starting a new one
        if(timerRef.current) {
            clearInterval(timerRef.current)
        }
        
        // start countdown
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

    const stopTimer = () => {
        if(timerRef.current) {
            clearInterval(timerRef.current)
        }
    }
  return (
    <div>
        <h1>Time left: {timeLeft}</h1>
      <input type="number" ref={inputRef} placeholder='Enter time in seconds'/>
      <button onClick={setTimer}>Set Timer</button>
      <button onClick={stopTimer} style={{marginLeft: '10px'}}>Stop Timer</button>
    </div>
  )
}

export default Timer
