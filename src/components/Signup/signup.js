import React, { useCallback } from 'react'
import { withRouter } from "react-router";

import FirebaseApp from "../../services/firebase/FirebaseConfig";

const Signup = ( { history } ) => {

  const handleSignup = useCallback( 
    async event => {
      event.preventDefault();
      const {email, password } = event.target.elements;
      try {
        await FirebaseApp
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch ( error ) {
        alert ( error )
      }
    }, [ history ]
  )

  return (
    <section>
      <h2>
        Signup
      </h2>
      <form
        onSubmit={ handleSignup }
      >
        <label>
          Email
          <input
            name='email'
            type='email'
            placeholder='Email'
          />
        </label>
        <br />
        <br />
        <label>
          Password
          <input
            name='password'
            type='password'
            placeholder='Password'
          />
        </label>
        <br />
        <br />
        <button
          type='submit'
        >
          Signup
        </button>
      </form>
    </section>
  )
}




export default withRouter(Signup)
