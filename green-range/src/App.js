import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Footer />
    </Wrapper>
  );
}

export default App;
