import React from "react";

function Register1() {
    return(
        <div>
            <h1>REGISTER</h1>
            <div>
                <input className="register-input-left" placeholder="First Name" type="text"></input>
                <input className="register-input-right" placeholder="Last Name" type="text"></input>
            </div>
            <div>
                <input className="register-input-left" placeholder="Username" type="text"></input>
                <input className="register-input-right" placeholder="Email" type="email"></input>
            </div>
            <div>
                <input className="register-input-left" placeholder="Password" type="password"></input>
                <input className="register-input-right" placeholder="Confirm Password" type="password"></input>
            </div>
            <button type="button" className="btn btn-large btn-dark btn-login-register">Register</button>
        </div>
    )
}

export default Register1;