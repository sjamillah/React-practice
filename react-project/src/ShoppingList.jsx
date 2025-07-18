import { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([])
    const [input, setInput] = useState({name: '', quantity: ''})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: name === 'quantity' ? Number(value) : value
        }))
    }

    const addItem = (e) => {
        e.preventDefault();
        if(input.name.trim() === '' || input.quantity === '') return;
        setItems([...items, input])
        setInput({ name: "", quantity: "" })
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={addItem}>
                <input type="text" name="name" placeholder="Please add item" value={input.name} onChange={handleChange}/>
                <input type="number" name="quantity" placeholder="Please add quantity" value={input.quantity} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>

            <ul>
                {items.map(
                    (item, index) => (
                        <li key={index}>{item.name} (x{item.quantity})</li>
                    )
                )}
            </ul>
        </div>
        
    )
}

export default ShoppingList;