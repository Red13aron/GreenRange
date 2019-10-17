import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Header></Header>
      <Footer />
    </Wrapper>
  );
}

export default App;
