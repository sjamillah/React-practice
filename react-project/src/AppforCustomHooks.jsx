import React from 'react'
import useFetch from './useFetch'

const AppforCustomHooks = () => {
    // we destructure the custom hook and then pass the elements
    // these custom hooks are used when we want to use the same hook many times in different components
    const [data] = useFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      {data && data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  )
}

export default AppforCustomHooks
