import React from 'react';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import postImage from '../../assets/images/ben-maint-entrance.jpg';

function AboutUsPage(){
    return (
        <div className="w-100 content">
            <Container className="pt-3 pb-3 pt-md-5 pb-md-5">
                <Row>
                    <Col>
                        <div class="post-15 page type-page status-publish hentry post-content">
                        
                            <h1 class="title">About Us</h1>

                            <div class="entry">
                                <p><img className="alignleft img-fluid" title="ben-maint-entrance" src={postImage} alt="" width="308" height="198"/>Benjamin Maintenance is a family owned business. It has been our premise that with hard work,expertise and high standards of excellence success would be realized. We have over 24 years of experience in roofing, exterior restoration, waterproofing and plaza decks. All of our supervisors,foremen and laborers are skilled in their craft. An essential element of our job ï¿¼ management procedure is that an experienced and proficient project manager runs each project. To ensure high quality standards the owners closely monitor each job. Benjamin Maintenance is incorporated under the laws of the State of New York and fully insured and bondable. Our firm has succeeded to prominent statues year after year and we can attribute our accomplishments to the trust and support of our clients,for both our roofing &amp; restoration projects.</p>
                                <p>Our most valuable asset has been the quality of men and women who comprise Benjamin Maintenance. It is their loyalty, enthusiasm and expertise, which has been most responsible for our success. Our office is efficiently run and communicates constantly with those in the field, via two way radio dispatch, providing constant communication between projects, clients and personnel.</p>
                                <p>Benjamin Maintenance specializes in exterior building maintenance, roofing systems and plaza decks. We are approved roofing contractors for Kemper, Siplast, Johns Mansville, Firestone ï¿¼ ,Soprema,Garland, US Intec/Brai, Celotex, Hanover Pavers,WR Grace and many other systems. Based on our installation techniques and performance track record with these manufacturers we have earned their automatic seal of approval with full warranty coverage. This web site shows some of the more recognized projects we have completed and a partial list of satisfied and continuous clients. We at Benjamin Maintenance hope that when you are contemplating your next project, regardless of the requirements, you afford us the opportunity to submit our competitive bid.</p>
                                <p>If you have any questions or need anyÂ&nbsp; further information please feel free to contact us.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default AboutUsPage;