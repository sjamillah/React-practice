import React, { useRef } from 'react'

const UseRefApp = () => {
    const inputElement = useRef(null)
    console.log(inputElement)

    // This is used to focus and then write something but it doesn't cause any re-render since it's using useRef hook(inputElement)
    const focusInput = () => {
        inputElement.current.focus()
        inputElement.current.value = 'Hello'
    }
  return (
    <div>
      <input type="text" ref={inputElement}/>
      <button onClick={() => focusInput()}>Focus & Write</button>
    </div>
  )
}

export default UseRefApp
