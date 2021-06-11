import React from "react";
import LabelInput from "./LabelInput";
import LabelInputText from "./LabelInputText";

function Survey2() {
    return (
        <div>

            <h2>
                2. Which languages are you interested in?
            </h2>

            <LabelInputText
                text1="C"
                text2="C++"
                text3="C#"
                text4="Objective C"
                text5="Python"
            />

            <br />

            <LabelInputText
                text1="Java"
                text2="JavaScript"
                text3="Kotlin"
                text4="Swift"
                text5="Dart"
            />
        </div>
    )
}

export default Survey2;