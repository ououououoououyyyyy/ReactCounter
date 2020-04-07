import React, {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h1>Counter</h1>
            <p>You pressed {count} time</p>
            <button onClick={() => setCount(count + 1)}>
                Press
            </button>
        </div>
    );
}
