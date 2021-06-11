import React from "react";
import codeImg from "./code.jpg";

function About1() {
    return (
        <div>
            <h1 className="about-heading">CODIFY WORLD</h1>
            <img src={codeImg} alt="code" height="400" width="1000"/>
            <h1 className="about-heading">HAPPY CODING</h1>
        </div>
    )
}

export default About1;