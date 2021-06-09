import React from "react";

const time = new Date();
const getYear = time.getFullYear();

function FooterText() {
    return (
        <footer>Copyright © {getYear}</footer>
    )
}

export default FooterText;