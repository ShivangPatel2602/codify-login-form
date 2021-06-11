import React from "react";
import LabelInput from "./LabelInput";

function Survey2() {
    return (
        <div>
            <h2>
                2. Which languages are you interested in?
            </h2>
            <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <LabelInput text="C" />
                <LabelInput text="C++" />
                <LabelInput text="C#" />
                <LabelInput text="Objective C" />
                <LabelInput text="Python" />
            </div>
            <br />
            <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <LabelInput text="JavaScript" />
                <LabelInput text="Java" />
                <LabelInput text="Swift" />
                <LabelInput text="Kotlin" />
                <LabelInput text="Dart" />
            </div>
        </div>
    )
}

export default Survey2;