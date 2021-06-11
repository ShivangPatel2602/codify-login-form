import React from "react";

function LabelInput(props) {
    return (
        <label class="btn btn-dark btn-color">
            <input type="checkbox" class="form-check list-group-item" />{props.text}
        </label>
    )
}

export default LabelInput;