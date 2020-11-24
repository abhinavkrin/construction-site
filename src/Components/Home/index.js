import React from 'react';
import Container from 'react-bootstrap/Container';
import HomeCarousel from './HomeCarousel';

function HomePage(){
    return (
       <div className="w-100 content">
            <Container className="pt-3 pb-3 pt-md-5 pb-md-5">
                <HomeCarousel className="border rounded shadow-sm"/>
            </Container>
       </div>
    )
} 

export default HomePage;