import React from "react";
import NavList from "./NavList";

function Navbar() {
    return (
        <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="/">Codify World</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        <NavList text="Login" navLink=""/>
                        <NavList text="Register" navLink=""/>
                        <NavList text="Contact Us" navLink=""/>
                        <NavList text="About Us" navLink=""/>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;