import React from "react";

function Login1() {
    return (
        <div>
            <h1 className="login-heading">LOGIN</h1>
            <div><input className="login-input" type="email" placeholder="Username/Email"></input></div>
            <div><input className="login-input" type="password" placeholder="Password"></input></div>
            <div>
                <button type="button" className="btn btn-large btn-dark btn-login-register">Login</button>
            </div>
            <a href="#">Forgot Password?</a>
        </div>
    )
}

export default Login1;