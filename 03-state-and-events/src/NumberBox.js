import {useState} from 'react'

function NumberBox() {
    const [count, setCount] = useState(0);

    const increaseNumber = () => {
        // change the current value in the `count` variable
        // to be its current value + 1
        setCount(count + 1);
    }

    const decreaseNumber = () => {
        setCount(count -1 );
    }

    return <>
            <div style={{
            "padding":"20px",
            "height":"50px",
            "width": "50px",
            "border":"1px solid black"
        }} onClick={increaseNumber}>
            {count}
        </div>
        <button onClick={increaseNumber}>Increment</button>
        <button onClick={decreaseNumber}>Decrement</button>
    </>
}

export default NumberBox;