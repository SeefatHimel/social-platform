import React from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
// import SignUp from "./login -signup/signup.component";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container-fluid">
                    <Link
                        style={{
                            background: "yellow",
                            color: "black",
                            padding: "5px",
                            width: "fit-content",
                            borderRadius: "5px",
                            fontWeight: "bold",
                        }}
                        className="navbar-brand"
                        to="/"
                    >
                        FB
                    </Link>
                    <Link className="navbar-brand" to="/logIn">
                        Log in
                    </Link>
                    <Link className="navbar-brand" to="/signUp">
                        Sign up
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
