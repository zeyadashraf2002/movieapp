import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import { LangContext } from "./context/LangContext";
import Details from './Pages/Details';
import Home from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Favorites from './Pages/Favorites';

export default function App() {
  const [contextLang, setContextLang] = React.useState("en");

  return (
    <BrowserRouter basename="/movieapp">
      <LangContext.Provider value={{ contextLang, setContextLang }}>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={MoviesPage} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/fav" component={Favorites} exact />
          <Route path="/movie/:id" component={Details} exact />
          <Route component={NotFound} /> {/* fallback */}
        </Switch>
      </LangContext.Provider>
    </BrowserRouter>
  );
}
