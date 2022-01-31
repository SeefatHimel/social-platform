import React from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ margin: "20px" }}
            >
                <Link
                    style={{
                        background: "blue",
                        color: "white",
                        padding: "5px",
                        width: "fit-content",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                    className="navbar-brand"
                    to="/"
                >
                    Facebook
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="navbar-brand" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/logIn">
                                Log in
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/signUp">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
