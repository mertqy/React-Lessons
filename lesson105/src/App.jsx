import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [firstName, setFirstName] = useState("");
  useEffect(() => {
    console.log("her zaman calisir");
  });
  useEffect(() => {
    console.log("ilk render edildigine calisir");
  }, []);
  useEffect(() => {
    console.log(
      "ilk render edildigine ve FirstName degeri degistiginde calisir",
    );
  }, [firstName]);

  return (
    <>
      <div>{firstName}</div>
      <div>
        <button onClick={() => setFirstName("aa")}>change name</button>
      </div>
    </>
  );
}

export default App;
