import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import slide1 from './assets/bannerimages/4.jpg'
import slide2 from './assets/bannerimages/2.jpg'
import slide3 from './assets/bannerimages/3.jpg'

const Banner = () => {
    const imageStyle = {
        
        maxHeight: '70vh'
       
      };
    return (
        <Carousel >
            <Carousel.Item >
                <img
                    className="d-block w-100  "
                    src={slide1}
                    alt="First slide"
                    style={imageStyle}
                    
                />
                <Carousel.Caption>
                    <h3 style={{color:'white'}}>Are you ready for an unforgettable experience? Register now and let's make memories together!</h3>
                  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    style={imageStyle}
                />

                <Carousel.Caption>
                    <h3 style={{color:'white'}}>Don't swipe left on this opportunity! Swipe right to register for the hottest event in town!</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    style={imageStyle}
                />

                <Carousel.Caption>
                    <h3 >Are you a keyboard? Because you're about to hit the 'Enter' key to an amazing event. Register now!</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

            
           
        </Carousel>
    )
}

export default Banner