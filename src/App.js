import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compnent";

import "./pages/homepage/homepage.style.scss";

import ShopComponent from "./pages/shop/shop.component";

import Header from "../src/components/header/header.component";

import Checkout from "../src/pages/checkout/checkout.component";

// import { auth, createUserProfileDocument } from "./firebase/firebase.utli";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import React, { useEffect } from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user-action";

import { selectCurrentUser } from "./redux/user/user.selector";

import { selectCollectionForPreview } from "./redux/shop/shop.selector";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/checkout" component={Checkout} />

        <Route
          exact
          path="/sign"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
