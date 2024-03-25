// useState is a hook
// a hook is a function, when called, will add
// new functionality to a component
import {useState} from 'react';

export default function ColorSwitcher() {
    // setup hooks
    // whenever the color state variable changes,
    // this component will be re-rendered
    const [color, setColor] = useState("white");

    // initialization
    const clickRedButton = () => {
        setColor("red");        
    }

    const clickBlueButton = () => {
        setColor("blue")
    }

    // return JSX
    return (
        <>
            <div style={{
                "width": "80px",
                "height": "80px",
                "border": "1px solid black",
                // setting the background color of the div
                // to the current value of the state `color`
                "background-color": color
            }}
                className="m-3"
            >

            </div>
            <button onClick={clickRedButton}>Red</button>
            <button onClick={()=>{
                setColor("green");
            }}>Green</button>
            <button onClick={clickBlueButton}>Blue</button>
        </>
    )
}