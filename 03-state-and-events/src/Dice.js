import {useState} from 'react';

export default function Dice() {

    // state variables
    const [diceValue, setDiceValue] = useState(0);

    // event handlers
    const processClick = () => {
        const randomNumber = Math.floor(Math.random() *  6 + 1);
        setDiceValue(randomNumber);
    }

    // jsx
    return (<>
        <div style={{
            border:"1px solid black",
            padding:"5px"
        }} onClick={processClick}>
            {diceValue}
        </div>
    </>)

}