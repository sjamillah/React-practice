import { useState } from "react";
import Component1 from "./components/component1";
import Component2 from "./components/component2";

// These are props using the states
const ShareState = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <Component1 count={count} onClickHandler={() => setCount(count + 1)} />
            <Component2 count={count} onClickHandler={() => setCount(count - 1)} />
        </section>
    )
}

export default ShareState;
