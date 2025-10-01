import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/NavbarComponent";
import login from "./Pages/Login";
import register from "./Pages/Register";
import favorites from "./Pages/Favorites";
import Home from "./Pages/HomePage";
import NotFound from "./Pages/NotFoundPage";
import Details from "./Pages/MovieDetails";
import { useSelector } from "react-redux";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MoviesPage from "./Pages/MoviesPage";
import { LangContext } from "./Components/Context/LangContext";

function App() {
  const myTheme = useSelector((state) => state.myThemeReducer.theme);
  const myLang = useSelector((state) => state.myLangReducer.lang);

  // أضفنا useState
  const [contextLang, setContextLang] = useState("EN");

  return (
    <div
      dir={myLang === "EN" ? "ltr" : "rtl"}
      className={`${
        myTheme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <BrowserRouter>
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
    </div>
  );
}

export default App;
