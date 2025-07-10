import { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const addTodo = (todo) => {
        todo.preventDefault(); //prevents the page reload
        if(input.trim() === "") return; //ignores the empty input by the user
        setTodos([...todos, input]) //adds the new todo
        setInput("") //clears the input field
    }
    return (
        <section>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Please input the todo element" value={input} onChange={(todo) => setInput(todo.target.value)}/>
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