import { useState } from 'react';

const StateApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    return <section>
        <h1>{count}</h1>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
    </section>
}

export default StateApp;
