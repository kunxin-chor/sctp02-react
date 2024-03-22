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

    // function that has a if itself that returns the correct value
    const isEvenOrOdd = () => {
        if (count % 2 ==0) {
            return "even"
        } else {
            return "odd";
        }
    }

    return <>
            <div style={{
            "padding":"20px",
            "height":"150px",
            "width": "50px",
            "color": count % 2 === 0 ? "green" : "red",
            "border":"1px solid black"
        }} onClick={increaseNumber}>
            {count}
            <p>{isEvenOrOdd()}</p>
            <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
            {
                count % 2 === 0 && <p>Even</p>
            }
            {
                count %2 === 1 && <p>Odd</p>
            }
        </div>
        <button onClick={increaseNumber}>Increment</button>
        <button onClick={decreaseNumber}>Decrement</button>
    </>
}

export default NumberBox;