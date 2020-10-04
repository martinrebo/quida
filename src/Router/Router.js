import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Pages/Home';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <h1>admin panel</h1>
                </Route>
                <Route path="/services">
                    <h1>Services Booking</h1>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
