import React from "react";

const time = new Date();
const getYear = time.getFullYear();

function FooterText() {
    return (
        <h4>Copyright © {getYear}</h4>
    )
}

export default FooterText;