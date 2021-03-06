import React from 'react';
import { Link } from 'react-router-dom';
import { EXTERIOR_RESTORATION_PAGE, ROOFING_SERVICE } from '../../routes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
					<div className="row pt-4 pb-4 text-center text-md-left">

						<div className="col-md-4 offset-md-1">
							<h5>CONTACT US</h5>

							<Container>
                                <Row className="pl-4">
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
                        <div className="col-md-1"/>
						<div className="col-md-4">
                            <h5>SERVICE PAGES</h5>
							<div className="row pl-md-4">
								<div className="col-12 mb-0">
									<ul className="list list-footer-nav ml-md-3">
										<li>
											<Link to={ROOFING_SERVICE}>
												Roofing Systems
											</Link>
										</li>
										<li>
											<Link to={EXTERIOR_RESTORATION_PAGE}>
												Exterior Building Restoration
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="d-md-none col-md-4 mt-2">
                            <h5>WHAT WE DO</h5>
							<div className="row pl-md-4">
								<div className="col-12 mb-0">
									<ul className="list list-footer-nav ml-md-3">
										<li>
											<Link to={ROOFING_SERVICE}>
												Roofing Systems
											</Link>
										</li>
										<li>
											<Link to={EXTERIOR_RESTORATION_PAGE}>
												Exterior Building Restoration
											</Link>
										</li>
										<li>
											<Link to={EXTERIOR_RESTORATION_PAGE}>
												Our Portfolio
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-copyright">
						<div className="row">
							<div className="col-lg-12 text-center">
								<p>United Brothers Construction © Copyright 2020. All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
        </footer>
    );
}

export default Footer;