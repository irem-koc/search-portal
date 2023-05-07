import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
    return (
        <div>
            <div className="landing-page">
                <div className="add-btn-section">
                    <button className="add-btn">
                        <Link to="/addlink">Add new record</Link>
                    </button>
                </div>
                <div className="logo-section">
                    <figure className="figure">
                        <img className="logo" src={logo} alt="logo" />
                        <figcaption className="alt-text-logo">Search app</figcaption>
                    </figure>
                </div>
                <div className="find-input">
                    <div className="find-record">Find in records</div>
                    <div className="input-seacrh-btn-group">
                        <form className="input-section">
                            <button type="submit">Search</button>
                            <input className="search-input" type="search" />
                        </form>
                        <button className="search-btn">Search</button>
                    </div>
                    {/* <Link to="/showmore">Show more...</Link> */}
                </div>
                <h2>Top News</h2>
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
        </div>
    );
};

export default Landing;
