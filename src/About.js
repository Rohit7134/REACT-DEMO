import React from 'react';
import { Link } from "react-router-dom";

// make a listing page with styles

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <Link to="/profile">Sign Up</Link>
        </div>
    );
    }

export default About;    