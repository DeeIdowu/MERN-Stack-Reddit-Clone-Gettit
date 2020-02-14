import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/pages/Home/Home";
import Register from "../src/components/pages/Registration/Register";
import Login from "../src/components/pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
