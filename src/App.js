import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Acceso from "./pages/Acceso";
import Nosotros from "./pages/Nosotros";

import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Acceso} />
          <Route exact path="/Inicio" component={Inicio} />
          <Route exact path="/Nosotros" component={Nosotros} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
