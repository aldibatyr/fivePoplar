import React from "react";
import "./App.scss";
import NavigationContainer from "./Components/Navigation/NavigationContainer";
import { Switch, Route } from "react-router-dom";
import FormView from "./Screens/FormView/FormView";
import ResultsView from "./Screens/ResultsView/ResultsView";

function App() {
  return (
    <div className="App">
      <header>
        <NavigationContainer />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <FormView />
          </Route>
          <Route exact path="/results">
            <ResultsView />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
