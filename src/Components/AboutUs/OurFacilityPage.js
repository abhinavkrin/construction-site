import React from 'react';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import postImage from '../../assets/images/facility.jpg';

function OurFacilityPage(){
    return (
        <div className="w-100 content">
            <Container className="pt-3 pb-3 pt-md-5 pb-md-5">
                <Row>
                    <Col>
                        <div className="post-93 page type-page status-publish hentry post-content">

                            <h1 class="title">Our Facility</h1>

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
                </Row>
            </Container>
        </div>
    )
} 

export default OurFacilityPage;