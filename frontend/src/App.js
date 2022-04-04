import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = React.useState(false);

  return (
    <div className="App">
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <Switch>
        {/* HomeScreen  */}

        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />

        {/* ProductScreen  */}
        {/* CartScreen  */}
      </Switch>
    </div>
  );
}

export default App;
