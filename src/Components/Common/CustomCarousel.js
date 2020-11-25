import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function CustomCarousel(props){
    
    const data = props.data;

    const [currentSlide,setCurrentSlide] = useState(0);

    const next = () => {
        if(data.length){
            setCurrentSlide((currentSlide + 1) % data.length);
        }
    }; 

    const prev = () => {
        if(data.length){
            setCurrentSlide((data.length + currentSlide - 1) % data.length);
        }
    };

    const carouselItems = data.map((item,i) => 
        <Carousel.Item key={item.title+i}>
            <img
            className="d-block w-100 carousel-img"
            src={item.image}
            alt="First slide"
            />
            <Carousel.Caption className="carousel-body">
                <h5 className="slide-title"><span>{item.title}</span></h5>
                <p className="slide-body">{item.body}</p>
                <div className="controls">
                    <div className="control-button" onClick={prev}>Previous</div>
                    <div className="control-button" onClick={next}>Next</div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        );
    return (
    <Carousel 
        className={props.className+ " custom"}
        controls={false} 
        onSelect={i=>setCurrentSlide(i)}
        indicators={true}
        activeIndex={currentSlide}>
        {carouselItems}            
    </Carousel>
    )
}

export default CustomCarousel;