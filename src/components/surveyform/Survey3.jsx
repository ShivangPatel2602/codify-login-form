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
                text5="Python"
                text6="Python"
                text7="Python"
            />

            <br />
            
            <LabelInputText
                text1="JavaScript"
                text2="Java"
                text3="Swift"
                text4="Kotlin"
                text5="Dart"
                text6="Python"
                text7="Python"
            />
        </div>
    )
}

export default Survey2;