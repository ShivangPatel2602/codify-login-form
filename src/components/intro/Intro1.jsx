import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Intro1() {
    return (
        <div>
            <Carousel className="carousel-area">

                <Carousel.Item className="carousel-design" interval={1000}>
                    <h2 className="carousel-1-heading">HI CODERS 🙋‍♂️</h2>
                    <h2 className="carousel-1-heading">Welcome</h2>
                    <h2 className="carousel-1-heading">to the</h2>
                    <h2 className="carousel-1-heading">World of Codes!!!</h2> 
                </Carousel.Item>

                <Carousel.Item className="carousel-design" interval={1000}>
                    <h2 className="carousel-2-heading">Vast Variety</h2>    
                    <h2 className="carousel-2-heading">of resources</h2>    
                    <h2 className="carousel-2-heading">to satisfy</h2>    
                    <h2 className="carousel-2-heading">your hunger for knowledge.</h2>

                    <p className="carousel-2-p">Coz: Knowledge know no bounds.</p>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Intro1;