import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";
const Landing = () => {
    return (
        <div>
            <button className="add-btn">
                <Link to="/addlink">Add new record</Link>
            </button>
            <figure>
                <img src={logo} alt="logo" />
                <figcaption>Search app</figcaption>
            </figure>
            <h2>Find in records</h2>
            <input type="text" />
            <button>Search</button>
            <Link to="/showmore">Show more...</Link>
            <h2>Top News</h2>
        </div>
    );
};

export default Landing;
