import React from "react";

function NavList(props) {
    return (
        <div>
            <li className="nav-item">
                <a className="nav-link" href="#">{props.text}</a>
            </li>
        </div>
    )
}

export default NavList;