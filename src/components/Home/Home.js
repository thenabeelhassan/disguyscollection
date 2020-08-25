import React from "react";

import FirebaseApp from '../../services/firebase/FirebaseConfig'
// import { Products } from "../Products/Products";

const Home = () => {
  return (
    <section>
      <h1>
        Home
      </h1>
      <button 
        onClick={ 
          () => FirebaseApp.auth().signOut()
        }
      >
        Sign out
      </button>
      {/* <Products/> */}
    </section>
  );
};

export default Home;