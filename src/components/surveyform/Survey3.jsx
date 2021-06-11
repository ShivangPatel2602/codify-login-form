import React from "react";
import LabelInput from "./LabelInput";

function Survey2() {
    return (
        <div>
            <h2>
                2. Which fields in Computer Science are you interested in?
            </h2>
            <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <LabelInput text="Machine Learning" />
                <LabelInput text="Web Development" />
                <LabelInput text="Android Development" />
                <LabelInput text="iOS Development" />
                <LabelInput text="Python" />
                <LabelInput text="Python" />
                <LabelInput text="Python" />
            </div>
            <br />
            <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <LabelInput text="JavaScript" />
                <LabelInput text="Java" />
                <LabelInput text="Swift" />
                <LabelInput text="Kotlin" />
                <LabelInput text="Dart" />
                <LabelInput text="Python" />
                <LabelInput text="Python" />
            </div>
        </div>
    )
}

export default Survey2;