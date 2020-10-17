import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndItems,
} from './firebase/firebaseUtils';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import { selectCollectionsForPreview } from './redux/shop/shopSelectors';

import HomePage from './pages/HomePage';
import ShopPage from './pages/Shop';
import SignInSignUpPage from './pages/SignInSignUp';
import CheckoutPage from './pages/Checkout';

import Header from './components/Header';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const collections = useSelector(selectCollectionsForPreview);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });

        return;
      }

      dispatch(setCurrentUser(userAuth));
      addCollectionAndItems(
        'collections',
        collections.map(({ title, items }) => ({ title, items }))
      );
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [collections, dispatch]);

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
