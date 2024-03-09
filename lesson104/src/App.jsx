import { useState } from "react";

import "./App.css";

function App() {
  let [name, setname] = useState(["ali", "ahmed", "usman"]);

  let [count, setCount] = useState(0);
  const pluss = () => {
    setCount(count + 1);
  };
  return (
    <>
      {name.map((name, index) => (
        <div key="index" id="index">
          {name}
        </div>
      ))}
      <hr />
      <div>{count}</div>
      <div>
        <button onClick={pluss}>btn</button>
      </div>
    </>
  );
}

export default App;
