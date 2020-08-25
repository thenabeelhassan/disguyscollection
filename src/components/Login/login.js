import React, { useCallback, useContext } from "react";
import { 
  withRouter, 
  Redirect 
} from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signup from "../Signup/signup";


import FirebaseApp from '../../services/firebase/FirebaseConfig'
import { AuthContext } from "../../services/firebase/Auth";

const Login = ( { history } ) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    }, [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  
  return (
    <section>
      <h2>
        Log in
      </h2>
      <form onSubmit={ handleLogin }>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br />
        <br />
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br />
        <br />
        <button type="submit">
          Log in
        </button>
      </form>
      <br />
      <br />
      <Router>
        <Link
          to='/signup'
        >
          <button
            onClick="window.location.reload()"
          >
            Signup
          </button>
        </Link>
      </Router>
      <Switch>
        <Route 
          path='/signup'
        >
          <Signup />
        </Route>
      </Switch>
    </section>
  );
};

export default withRouter(Login);