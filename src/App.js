import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components";
import UhOh from "./Components/Payment/UhOh";
import Test from "./Components/test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/uh-oh" component={UhOh} />
          <Route path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
