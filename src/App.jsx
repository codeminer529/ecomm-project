import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>This is Ecomm Project</h1>
        <button>Normal Button</button>
        <Button>Bootstrap Button</Button>
      </div>
    </>
  );
}

export default App;
