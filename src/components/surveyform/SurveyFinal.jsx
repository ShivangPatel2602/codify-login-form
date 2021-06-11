import React from "react";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import Survey3 from "./Survey3";
import FooterText from "../Top&Bottom/Footer";

function SurveyFinal() {
    return (
        <div>
            <h1 className="survey-heading">SURVEY FORM</h1> 
            <div className="survey-content">
                <Survey1 />
                <Survey2 />
                <Survey3 />
            </div>
            <FooterText />
        </div>
        
    )
}

export default SurveyFinal;