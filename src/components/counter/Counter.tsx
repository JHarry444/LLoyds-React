import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState<number>(0);


    return (<>
        <h2>State</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input type="number" value={count} readOnly />
        <button onClick={() => setCount(oldCount => oldCount - 1)}>-</button>
    </>);
}

export default Counter;