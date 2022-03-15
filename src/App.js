import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import DisplayBookData from "./components/DisplayBookData";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Route component={DisplayBookData} />
         </Router>
      </Provider>
   );
}

export default App;
