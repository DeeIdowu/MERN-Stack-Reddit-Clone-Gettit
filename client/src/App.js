import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//styling
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
//header
import Header from "../src/containers/Header/Header";

//pages
import Home from "../src/components/pages/Home/Home";
import Register from "../src/components/pages/Registration/Register";
import Login from "../src/components/pages/Login/Login";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
