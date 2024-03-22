// When importing your own files in the `src` folder
// Make sure you put `./` in front
const puppy = import("./puppy.jpg");
const logo = import('./logo.svg');

function App() {
  return (
    <>
        <img src={require('./puppy.jpg')}/>
        <img src={logo}/>
        <h1>Hello World</h1>
        <h2>I love Chicken Rice</h2>
        <ul>
          <li>Apples</li>
          <li>Oranges</li>
          <li>Pineapples</li>
        </ul>
    </>
  );
}

export default App;
