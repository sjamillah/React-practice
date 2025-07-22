import React, { useRef } from 'react'

const FocusInput = () => {
    const val = useRef('')

    const focusSome = () => {
        val.current.focus() //
        val.current.value = "Now See Me"
    }
  return (
    <div>
      <input type="text" ref={val}/>
      <button onClick={() => focusSome()}>Click To See Magic</button>
    </div>
  )
}

export default FocusInput
