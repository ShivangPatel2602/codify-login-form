import React from "react";

function Survey2() {
    return (
        <div>
            <h2>
                2. Which languages are you interested in?
            </h2>
            <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />C
                </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />C++
                </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />Objective C
                        </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />C#
                        </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />Python
                        </label>
            </div>
            <br />
            <div class="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />JavaScript
                </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />Java
                </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />Swift
                        </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />Dart
                        </label>
                <label class="btn btn-dark btn-color">
                    <input type="checkbox" class="form-check list-group-item" />Kotlin
                        </label>
            </div>
        </div>
    )
}

export default Survey2;