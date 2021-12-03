import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Products from "./components/Product"
import Cart from "./components/Cart";
import { Container } from "reactstrap";

const App=()=> {
  return (
    <Container className="App">
      <h1 className="pt-3 pb-3">
        Alışveriş Sepeti 
        <img
           src="https://media0.giphy.com/media/ZxomYqy9uGtSQSSjth/giphy.gif"
           style={{width: 200, height: 200 }}
          alt="React"
        />
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </Container>
  );
}


export default (App);

