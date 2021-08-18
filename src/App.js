import React, { Suspense } from "react";
import Header from "../src/components/Header/index";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photo" />
            <Route path="/photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
