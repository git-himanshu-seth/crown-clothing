import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compnent";

import "./pages/homepage/homepage.style.scss";

import ShopComponent from "./pages/shop/shop.component";

import Header from "../src/components/header/header.component";

import { auth } from "./firebase/firebase.utli";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopComponent} />
          <Route path="/sign" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
