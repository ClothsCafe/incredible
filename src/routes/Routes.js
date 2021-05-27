import React, { useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavLayout from '../components/layouts/NavLayout';
import HomeScreen from '../components/screens/HomeScreen';
import CartScreen from '../components/screens/CartScreen';
import AuthScreen from '../components/screens/AuthScreen';
import { AuthContext } from '../context/auth-context';

export default function Routes() {
  const userAuth = useContext(AuthContext);
  return (
    <Router>
      <div>
        <NavLayout />

        {
          userAuth.isLoggedIn ?

            <Switch>
              <Route exact path="/cart">
                <CartScreen />
              </Route>
              <Redirect from='/login' to='/'/>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch> :
            <Switch>
              <Route exact path="/login">
                <AuthScreen />
              </Route>
              <Redirect to="/login"/>
            </Switch>


        }



      </div>
    </Router >
  );
}




