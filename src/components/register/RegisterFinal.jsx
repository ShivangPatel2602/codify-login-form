import React from "react";
import Navbar from "../Navbar";
import Register1 from "./Register1";
import Register2 from "./Register2";
import FooterText from "../footer";


function RegisterFinal() {
    return(
        <div>
            <Navbar />
            <Register1 />
            <Register2 />
            <FooterText />
        </div>
    )
}

export default RegisterFinal;