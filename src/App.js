import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import login from "./pages/Login";
import register from "./pages/Register";
import favorites from "./pages/Favorites";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { LangContext } from "./context/LangContext";

export default function App() {
  const [contextLang, setContextLang] = React.useState("en");

  return (
    <BrowserRouter basename="/movieapp">
      <LangContext.Provider value={{ contextLang, setContextLang }}>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={MoviesPage} exact />
          <Route path="/login" component={login} exact />
          <Route path="/register" component={register} exact />
          <Route path="/fav" component={favorites} exact />
          <Route path="/movie/:id" component={Details} exact />
          <Route component={NotFound} /> {/* fallback */}
        </Switch>
      </LangContext.Provider>
    </BrowserRouter>
  );
}
