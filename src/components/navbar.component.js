import React from "react";
import { Link } from "react-router-dom";

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

                <Link
                    className="navbar-brand"
                    to="/"
                    style={{ color: "black" }}
                >
                    Home
                </Link>

                <Link className="navbar-brand" to="/posts">
                    Posts
                </Link>
                <Link className="navbar-brand" to="/logIn">
                    Log in
                </Link>
                <Link className="navbar-brand" to="/signUp">
                    Sign up
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
