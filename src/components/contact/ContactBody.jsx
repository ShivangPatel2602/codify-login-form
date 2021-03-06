import React from "react";
import IconButton from "./ContactIconButton";

function ContactBody() {
    return (
        <div>
            {/* We Are Also On */}
            <div>
                <h1 className="contact-body-heading">WE ARE ALSO ON</h1>

                <IconButton classButton="btn btn-dark btn-lg" classIcon="fa fa-instagram" text=" Instagram" />
                <IconButton classButton="btn btn-dark btn-lg" classIcon="fa fa-facebook" text=" Facebook" />
                <IconButton classButton="btn btn-dark btn-lg" classIcon="fa fa-twitter" text=" Twitter" />
                <IconButton classButton="btn btn-dark btn-lg" classIcon="fa fa-linkedin" text=" LinkedIn" />

            </div>

            <hr style={{ width: "50%", color: "black" }} />

            {/* Contact Us */}
            <div>
                <h1 className="contact-body-heading">CONTACT US</h1>
                <h5>+91 84759 XXXXX </h5>
                <h5>abc@gmail.com</h5>
            </div>
        </div>
    )
}

export default ContactBody;