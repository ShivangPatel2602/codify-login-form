import React from "react";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";

function SurveyFinal() {
    return (
        <div>
            <h1 className="survey-heading">SURVEY FORM</h1> 
            <div className="survey-content">
                <Survey1 />
                <Survey2 />
            </div>
        </div>
        
    )
}

export default SurveyFinal;