// When importing your own files in the `src` folder
// Make sure you put `./` in front
import puppy from "./puppy.jpg"
import "./style.css"

function App() {
  return (
    <>
        <img src={require('./puppy.jpg')}/>
        <img src={puppy}/>
        <h1>Hello World</h1>
        {1+1}
        <p>
          {Math.random() * 100 + 1}
        </p>
        <h2 style={{
          'backgroundColor':'green',
          'fontSize':'64px'
        }}>I love Chicken Rice</h2>
        <ul>
          <li>Apples</li>
          <li>Oranges</li>
          <li>Pineapples</li>
        </ul>
    </>
  );
}

export default App;
