import Alert from "./Alert";
import Shout from "./Shout";

function displayHeader() {
  return (<h1>About Me</h1>);
}

function sayHello() {
  return "Hello Everybody"
}


function SumOfTwo(props) {
  return <div>
     {props.number1} + {props.number2} = {props.number1 + props.number2}
  </div>
}

// What is a component in React
// 1. Is a function
// 2. First alphabet of the function is upper case
// 3. Return JSX
//


function App() {
  return (
    <>
    <h1>Hello World</h1>
    {displayHeader()}
    {sayHello()}
    <Alert msg="Be careful of wet floor" bgcolor="green"/>
    <Alert msg="Be careful of wild monkeys" bgcolor="purple"/>
    <Shout msg="hello world"/>
    <SumOfTwo number1={7} number2={3}/>
    </>
  );
}

export default App;
