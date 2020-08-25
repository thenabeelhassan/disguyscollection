import React, { useEffect, useState } from 'react';

import FirebaseApp from "./FirebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ( { children } ) => {

    const [currentUser, setcurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(
        () => {
            FirebaseApp.auth().onAuthStateChanged(
                (user) => {
                    setcurrentUser(user)
                    setPending(false)
            });
        }, []
    );

    if(pending){
        return <>Loading...</>
    }
    
    return (
        <AuthContext.Provider
            value={
                { currentUser }
            }
        >
            { children }
        </AuthContext.Provider>
    )
}
