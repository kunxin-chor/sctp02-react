import {useState} from "react"

// export default function ClickCounter() {

// }

function ClickCounter() {

    const [clickCount, setClickCount] = useState(0);
    const increaseCount = () => {
        setClickCount(clickCount + 1);
    }


    return (<>
        {clickCount}
        <button onClick={increaseCount}>Increment</button>
    </>)
}

export default ClickCounter;