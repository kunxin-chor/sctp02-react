// the first parameter to a component function
// is props - an object
// the key and the value of each key is set by the parent
export default function Alert(props) {
    return (
        <div className={"alert alert-"+props.messageStyle}>
            {props.message}
        </div>
    )
}
