import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
