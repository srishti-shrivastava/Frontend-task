import React from "react";
import "./App.css"



import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Answer from "./Components/Answer/answer";
import Result from "./Components/Result/result";
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/answer" >
            <Answer />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>

    </>

    
  );
};

export default App;