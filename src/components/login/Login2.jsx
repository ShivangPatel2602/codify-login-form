import React from "react";
import LoginIconButton from "./LoginIconButton";

function Login2() {
    return (
        <div>
            <h1 className="login-heading">OR SIGN IN WITH</h1>
            <div>
                <LoginIconButton classIcon="fa fa-google" text="Google" />
                <LoginIconButton classIcon="fa fa-github" text="GitHub" />
                <LoginIconButton classIcon="fa fa-linkedin" text="LinkedIn" />
            </div>
        </div>
    )
}

export default Login2;