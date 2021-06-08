import React from "react";

function Survey1() {
    return (
        <div>

            <h1 className="survey-heading">SURVEY FORM</h1>

            <form>

                <h3>
                    1. Are you studying at a college/university?
                </h3>

                <input type="radio" value="yes" />
                <label for="yes">Yes</label>

                <input type="radio" value="no" />
                <label for="no">No</label><br />

            </form>
        </div>

    )
}

export default Survey1;