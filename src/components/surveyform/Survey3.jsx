import React from "react";
import LabelInputText from "./LabelInputText";

function Survey2() {
    return (
        <div>

            <h2>
                2. Which fields in Computer Science are you interested in?
            </h2>

            <LabelInputText
                text1="Machine Learning"
                text2="Web Development"
                text3="Android Development"
                text4="iOS Development"
                text5="Deep Learning"
            />

            <br />

            <LabelInputText
                text1="Competitive Programming"
                text2="Computer Networking"
                text3="Neural Networks"
                text4="Artificial Intelligence"
                text5="Operating Systems"
            />
        </div>
    )
}

export default Survey2;