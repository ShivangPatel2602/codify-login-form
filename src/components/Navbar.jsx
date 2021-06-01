import React from "react";
import NavList from "./NavList";

function Navbar() {
    return (
        <div className="container-fluid">

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

                <a class="navbar-brand" href="#">Codify World</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">

                        <NavList text="Login" />
                        <NavList text="Register" />
                        <NavList text="Contact Us" />
                        <NavList text="About Us" />

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;