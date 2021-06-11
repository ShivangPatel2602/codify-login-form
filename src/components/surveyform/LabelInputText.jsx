import React from "react";
import LabelInput from "./LabelInput";

function LabelInputText(props) {
    return (
        <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <LabelInput text={props.text1} />
                <LabelInput text={props.text2} />
                <LabelInput text={props.text3} />
                <LabelInput text={props.text4} />
                <LabelInput text={props.text5} />
                <LabelInput text={props.text6} />
                <LabelInput text={props.text7} />
        </div>
    )
}

export default LabelInputText;