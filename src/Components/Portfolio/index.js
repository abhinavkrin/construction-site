import React from 'react';
import PortfolioCarousel from './PortfolioCarousel';
import Container from 'react-bootstrap/Container';

function PortfolioPage(){
    return (
        <div className="w-100 content">
             <Container className="pt-3 pb-3 pt-md-5 pb-md-5">
                <PortfolioCarousel className="border rounded shadow-sm"/>
            </Container>
        </div>
     )
} 

export default PortfolioPage;