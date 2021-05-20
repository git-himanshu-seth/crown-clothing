import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compnent";

import "./pages/homepage/homepage.style.scss";

import ShopComponent from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
