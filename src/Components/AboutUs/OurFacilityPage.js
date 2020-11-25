import React from 'react';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import postImage from '../../assets/images/facility.jpg';

function OurFacilityPage(){
    return (
        <div className="w-100 content">
            <Container className="pt-2 pb-2 pt-md-4 pb-md-4">
                <Row>
                    <Col className="mt-2" xs={12} md={8}>
                        <div className="post-93 page type-page status-publish hentry post-content">

                            <h3 class="title">Our Facility</h3>

                            <div className="custom-post">
                                    <div className="d-flex justify-content-center w-md-100">
                                        <img className="alignleft size-full wp-image-119" title="facility" src={postImage} alt="" width="156" height="248"/>
                                    </div>
                                    <div>                                        
                                        <p>Benjamin Maintenance Corp located at 104 22nd Street in Sunset Park. Our executive offices up stairs on top of a 12,500 Sq Ft Warehouse with a 7000 Sq Ft Mezzanine area, which stores and holds our many â€œtools of the tradeâ€, and then some tools and equipment that you would not see at just your average Building Maintenance Contractorâ€™s facility. We at Benjamin Maintenance are proud to show you some pictures of our facility and a list of just some of our many tools and equipment that we use on our many specialized projects.</p>
                                        <p>&nbsp;</p>
                                    </div>
                            </div>      
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="mt-2">
                        <div className="pt-4 post-content">
							<h6 className="footer-title">GET IN TOUCH</h6>

							<Container>
                                <Row className="pl-2">
                                    <Col xs={"auto"}>
                                        <strong className="title text-primary">ADDRESS</strong>
                                    </Col>
                                    <Col>
                                    <p className="address">
                                        Benjamin Maintenance<br/>
                                        104 22nd Street<br/>
                                        Brooklyn, NY 11232<br/>
                                        <i className="fas fa-phone"></i> 212-535-8500 (NYC) <br/>
                                        <i className="fas fa-phone"></i> 718-439-1200 (Brooklyn) <br/>
                                        <i className="fas fa-phone"></i> 718-492-0194 (Fax) <br/>
                                        <a href="mailto:mail@example.com"><i className="far fa-envelope"></i> mail@example.com</a> 
                                    </p>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default OurFacilityPage;