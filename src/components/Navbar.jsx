import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarTitle = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        
            <LinkContainer to="/">
                <Navbar.Brand>Codify World</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">

                    <LinkContainer className="nav-text-size" to="/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className="nav-text-size" to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className="nav-text-size" to="/survey">
                        <Nav.Link>Survey</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className="nav-text-size" to="/plans">
                        <Nav.Link>Plans</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className="nav-text-size" to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className="nav-text-size" to="/contact">
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarTitle;

// import React from "react";
// import NavList from "./NavList";

// function Navbar() {
//     return (
//         <div className="container-fluid">

//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

//                 <a className="navbar-brand" href="/">Codify World</a>

//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ml-auto">

//                         <NavList text="Login" navLink=""/>
//                         <NavList text="Register" navLink=""/>
//                         <NavList text="Contact Us" navLink=""/>
//                         <NavList text="About Us" navLink=""/>

//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar;