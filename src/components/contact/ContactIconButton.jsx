import React from "react";

function IconButton(props) {
    return (
        <div className="contact-icon">
            <button type="button" className="btn btn-dark btn-lg">
                <i className={props.classIcon}></i>
            {props.text}</button>
        </div>
    )
}

export default IconButton;