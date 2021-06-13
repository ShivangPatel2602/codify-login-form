import React from "react";
import Carousel from "react-bootstrap/Carousel";
import code from "./code.png";
import laptop from "./laptop.jpg";

function Intro1() {
    return (
        <div>
            <h1 className="intro-heading">HI CODERS!!!</h1>
            <Carousel>
                <Carousel.Item className="carousel-design" interval={1000}>
                    <h2>
                        Welcome to the World of Codes!!!
                    </h2>
                    <div>
                        <img src={code} alt="code" width="500" height="500" />
                        <img src={laptop} alt="laptop" width="500" height="500" />
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-design" interval={1000}>
                    <h2>
                        Vast Variety of resources to satisfy your hunger for knowledge.
                    </h2>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Intro1;