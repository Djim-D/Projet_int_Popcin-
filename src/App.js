import React from "react";
import HomePage from "./page/home";
import CategoriesPage from "./page/categories";
import Apropos from "./page/apropos";
import MovieDetails from "./components/fichefilm";
import Acteur from "./components/acteur";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/categories" exact component={CategoriesPage} />
            <Route path="/apropos" exact component={Apropos} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/actor/:id" component={Acteur} />
          </Switch>
        </BrowserRouter>
    )
}

export default App;
