import { useState, useEffect } from "react"

const DataFetchUseEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            if(data && data.length) setData(data)
        }
    getData();
    }, [])
  return (
    <div>
      <ul>
        {data.map(todo => (
            <section key={todo.id}>
                <li>{todo.title}</li>
                <li>Body --{todo.body}</li>
            </section>
        ))}
      </ul>
    </div>
  )
}

export default DataFetchUseEffect
