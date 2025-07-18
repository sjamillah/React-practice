import { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const addTodo = (e) => {
        e.preventDefault(); //prevents the page reload
        if(input.trim() === "") return; //ignores the empty input by the user
        setTodos([...todos, input]) //adds the new todo
        setInput("") //clears the input field
    }
    return (
        <section>
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Please input the todo element" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </section>
    )
}

export default TodoList;