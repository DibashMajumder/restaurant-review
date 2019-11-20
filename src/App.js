import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RestaurantPage from "./components/RestaurantPage";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

/**
 * 1. Add No Match @TODO
 */

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <Router>
            <div>
              <Route path="/" exact component={HomePage} />
              <Route
                path="/restaurant/:res_id"
                exact
                component={RestaurantPage}
              />
            </div>
          </Router>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
