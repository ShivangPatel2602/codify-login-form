import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselTemplate from "./CarouselTemplate";

function Intro1() {
    return (
        <div>
            <Carousel className="carousel-area">

                <Carousel.Item className="carousel-design" interval={1500}>
                    <CarouselTemplate text="HI CODERS 🙋‍♂️" />
                    <CarouselTemplate text="Welcome" />
                    <CarouselTemplate text="to the" />
                    <CarouselTemplate text="World of Codes!!!" />
                </Carousel.Item>

                <Carousel.Item className="carousel-design" interval={1500}>
                    <CarouselTemplate text="Vast Variety" />
                    <CarouselTemplate text="of resources" />
                    <CarouselTemplate text="to satisfy" />
                    <CarouselTemplate text="your hunger for knowledge." />

                    <p className="carousel-2-p">Coz: Knowledge know no bounds.</p>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Intro1;