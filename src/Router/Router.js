import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Booking from '../Pages/Booking';
import Home from '../Pages/Home';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <h1>admin panel</h1>
                </Route>
                <Route path="/booking">
                    <Booking/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
