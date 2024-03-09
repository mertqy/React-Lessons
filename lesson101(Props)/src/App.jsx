// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Product from "./Product.jsx";
import Container from "./Container.jsx";

function App() {
  return (
    <div>
      <Container>
        <Product productName='Pantul' price={3400}/>
      </Container>
    </div>
  );
}

export default App;
