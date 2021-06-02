import React from "react";
import Navbar from "../Navbar";
import Login1 from "./Login1";
import Login2 from "./Login2";
import FooterText from "../footer";

function LoginFinal() {
    return (
        <div>
            <Navbar />
            <Login1 />
            <Login2 />
            <FooterText />
        </div>
    )
}

export default LoginFinal;