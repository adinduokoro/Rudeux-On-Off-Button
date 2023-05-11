import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="App">
      <button className="btn btn-primary btn-lg" onClick={handleClick}>
        ON
      </button>
    </div>
  );
}

export default App;
