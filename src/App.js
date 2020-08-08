import React, { useState, useEffect } from "react";
import "./App.scss";
import NavigationContainer from "./Components/Navigation/NavigationContainer";
import { Switch, Route } from "react-router-dom";
import FormView from "./Screens/FormView/FormView";
import ResultsView from "./Screens/ResultsView/ResultsView";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <h1>Loading...</h1>
        </motion.div>
      ) : (
        <>
          <header>
            <NavigationContainer />
          </header>
          <main>
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={FormView} />
                    <Route exact path="/results" component={ResultsView} />
                  </Switch>
                </AnimatePresence>
              )}
            />
            {/* <Switch>
              <Route exact path="/">
                <FormView />
              </Route>
              <Route exact path="/results">
                <ResultsView />
              </Route>
            </Switch> */}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
