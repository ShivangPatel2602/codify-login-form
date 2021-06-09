import React from "react";
import {Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavLinkContainer(props) {
    return (
        <LinkContainer className="nav-text-size" to={props.toLink}>
            <Nav.Link>{props.text}</Nav.Link>
        </LinkContainer>
    )
}

export default NavLinkContainer;