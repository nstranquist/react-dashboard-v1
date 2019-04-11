import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Event</NavLink></li>
            <li><NavLink to="/signout">Log Out</NavLink></li>
            <li><NavLink exact to="/" className="btn btn-floating pink lighten-1">NS</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;