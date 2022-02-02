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
               
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="navbar-brand" to="/" style={{color : 'black'}}>
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
            </nav>
        </>
    );
};

export default Navbar;
