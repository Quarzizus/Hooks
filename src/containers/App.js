import React from "react";
import Header from "../components/Header";
import Characters from "../components/Characters";
import "./styles/App.scss";

const App = () => {
  return (
    <section className="App">
      <Header />
      <Characters />
    </section>
  );
};

export default App;
