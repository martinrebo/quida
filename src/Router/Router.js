import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Booking from '../Pages/Booking';
import Home from '../Pages/Home';
import BookedList from '../Pages/BookedList'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/booked">
                    <BookedList/>
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
