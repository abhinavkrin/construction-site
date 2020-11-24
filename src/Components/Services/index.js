import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import roofingCardImg from '../../assets/images/roofing_card.jpg';
import exteriorCardImg from '../../assets/images/exterior_card.jpg';
import { Link } from 'react-router-dom';
import { EXTERIOR_RESTORATION_PAGE, ROOFING_SERVICE } from '../../routes';

function ServicesPage(){
    return (
        <div className="w-100 content">
             <Container className="pt-3 pb-3 pt-md-5 pb-md-5">
                <Row>
                    
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={5} className="offset-lg-1 d-flex justify-content-center">
                        <Link to={ROOFING_SERVICE}>
                            <div className="service-card">
                                <img className="service-card-img" src={roofingCardImg} alt="Roofing Projects"/>
                                <div className="service-card-title">
                                    <Link to="/">Roofing Projects</Link>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
                        <Link to={EXTERIOR_RESTORATION_PAGE}>
                            <div className="service-card">
                                <img className="service-card-img" src={exteriorCardImg} alt="Roofing Projects"/>
                                <div className="service-card-title">
                                    <Link to={EXTERIOR_RESTORATION_PAGE}>Exterior Building Restoration</Link>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default ServicesPage;