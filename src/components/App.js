import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Productos from "./Productos";
import NuevoProduco from "./NuevoProduco";
import EditarProducto from "./EditarProducto";

//REDUX
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Header />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProduco} />
              <Route
                exact
                path="/productos/editar/:id"
                component={EditarProducto}
              />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
