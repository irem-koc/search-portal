import React, { useContext } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";
const Landing = () => {
    const { searchInput, setSearchInput, data, columns } = useContext(Context);

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
                        <figcaption className="alt-text-logo">
                            Search app
                        </figcaption>
                    </figure>
                </div>
                <div className="find-input">
                    <div className="find-record">Find in records</div>
                    <div className="input-seacrh-btn-group">
                        <form className="input-section">
                            <button type="submit">search btn</button>
                            <input
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="search-input"
                                type="text"
                            />
                        </form>
                        <button className="search-btn">Search</button>
                    </div>
                    {
                        data.filter((element) => { console.log(element)})
                    }
                    {/* <Link to="/showmore">Show more...</Link> */}
                </div>
                <h2>Top News</h2>
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
        </div>
    );
};

export default Landing;
