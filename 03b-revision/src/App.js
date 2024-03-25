// Before we can use Bootstrap, make sure to run `npm install bootstrap`
import "bootstrap/dist/css/bootstrap.min.css"

// import our own custom component
// if importing from the `src` folder
// make sure to put "./" 
import Alert from "./Alert";

import ColorSwitcher from "./ColorSwitcher";

function App() {
  // setup the hooks

  // initialization

  // return jsx
  return (
    <div className="container">
      <h1>Welcome to React</h1>
      {/* Create an instance of the Alert component */}
      <Alert message="Your account has been created successfully"
             messageStyle="success"
      />
      <Alert message="Sorry your password has expired"
             messageStyle="danger"
      />

      <ColorSwitcher/>
    </div>
  );
}

export default App;
