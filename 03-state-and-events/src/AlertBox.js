
import {useState} from 'react';

export default function AlertBox(props) {

    // create a state variable named message
    // and the default value is an empty string (i.em "")
    const [message, setMessage] = useState(props.defaultMessage)

    return <div style={{
        "border":"1px solid black"
    }}>
       {message}
    </div> 


}

