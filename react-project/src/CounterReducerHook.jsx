import React, { useReducer, useState } from 'react'
import { initialState, reducer } from './counterReducer';

const CounterReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState()

    const handleChange = (e) => {
        const value = e.target.value
        setInputValue(value === '' ? '' : Number(value))
    }

    const handleIncrement = () => dispatch({ type: 'increment' })
    const handleDecrement = () => dispatch({ type: 'decrement' })
    const handleIncrementByAmount = () => dispatch({ type: 'incrementByAmount', payload: inputValue })
    const handleDecrementByAmount = () => dispatch({ type: 'decrementByAmount', payload: inputValue })
  return (
    <div>
      <h1>The value is: {state.count}</h1>
        <button onClick={handleIncrement}>
            Increment
        </button>
        <button onClick={handleDecrement}>
            Decrement
        </button>

        <div style={{marginTop: '10px'}}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter a number'/>
            <button onClick={handleIncrementByAmount}>
            IncrementByAmount
            </button>
            <button onClick={handleDecrementByAmount}>
            DecrementByAmount
            </button>
        </div>

        <button onClick={() => {
            dispatch({ type: 'reset' });
            setInputValue(0)
            }}>Reset</button>
    </div>
  )
}

export default CounterReducerHook
