import React from "react";
import ContactIconButton from "../contact/ContactIconButton";

function Login2() {
    return (
        <div>
            <h1 className="login-heading">OR SIGN IN WITH</h1>
            <div>
                <ContactIconButton classButton="btn btn-dark btn-large btn-login" classIcon="fa fa-google" text=" Google" />
                <ContactIconButton classButton="btn btn-dark btn-large btn-login" classIcon="fa fa-github" text=" GitHub" />
                <ContactIconButton classButton="btn btn-dark btn-large btn-login" classIcon="fa fa-linkedin" text=" LinkedIn" />
            </div>
        </div>
    )
}

export default Login2;