import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/userSelectors';

import HomePage from './pages/HomePage';
import ShopPage from './pages/Shop';
import SignInSignUpPage from './pages/SignInSignUp';
import CheckoutPage from './pages/Checkout';

import Header from './components/Header';

import './App.css';

function App() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
