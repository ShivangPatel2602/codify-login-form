import React from "react";

function NavList(props) {
    return (
        <div>
            <li class="nav-item">
                <a class="nav-link" href="#">{props.text}</a>
            </li>
        </div>
    )
}

export default NavList;