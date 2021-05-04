import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar"
import Recommend from "./Recommend";
import VideoRow from "./VideoRow";
import Search from "./Search";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Router>
      <Header />

      <Switch>
        <Route path="/search/:searchitem" exact>
     <div className="app">
     <Sidebar />
     <Search />
     </div>
     </Route>
     <Route path='/'>
     <div className="app">
     <Sidebar />
     <Recommend />
     </div>
     </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
