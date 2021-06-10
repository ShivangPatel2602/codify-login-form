import React, {useState} from "react";

function Survey1() {

    const [isClicked, setClick] = useState(false);

    return (
        <div className="survey1-input">
            <form>

                <h2>
                    1. Are you studying at a college/university?
                </h2>

                <input type="radio" value="yes" />
                <label for="yes">Yes</label>

                <input type="radio" value="no" />
                <label for="no">No</label><br />

            </form>
        </div>

    )
}

export default Survey1;