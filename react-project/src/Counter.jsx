import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1)
    return (
        <section>
            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
        </section>
    )
}
export default Counter;