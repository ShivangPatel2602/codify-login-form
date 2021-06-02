import React from "react";

function Login1() {
    return (
        <div>
            <h1 className="login-heading">LOGIN</h1>
            <div><input type="email" placeholder="Username/Email"></input></div>
            <div><input type="password" placeholder="Password"></input></div>
            <a href="#">Forgot Password?</a>
        </div>
    )
}

export default Login1;