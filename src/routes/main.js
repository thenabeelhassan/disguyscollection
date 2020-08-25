import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from "../components/Home/Home";
import Login from "../components/Login/login";
import Signup from "../components/Signup/signup";

import { AuthProvider } from "../services/firebase/Auth";

import PrivateRoute from './private'

export const Routing = () => {
    return (
        <AuthProvider>
            <Router>
                <section>
                    <PrivateRoute exact path='/' component={ Home } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/signup' component={ Signup } />
                </section>
            </Router>
        </AuthProvider>
    )
}
