import React from "react";

function LoginIconButton(props) {
    return(
        <button type="button" className="btn btn-large btn-dark btn-login-register"><i className={props.classIcon}></i>  {props.text}</button>
    )
}

export default LoginIconButton;