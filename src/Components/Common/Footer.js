import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/united-brothers-header.png';
import { SITE_NAME } from '../../config';
import { ABOUTUS, CONTACT, HOME, PORTFOLIO, SERVICES } from '../../routes';
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
					<div className="row pt-4 pb-4 text-center text-md-left">
						<div className="col-md-3">
							<a href="demo-construction.html">
								<img alt={SITE_NAME} className="img-fluid logo" width="220" src={logo}/>
							</a>
						</div>
						<div className="col-md-4">
							<div className="row">
								<div className="col-lg-6 mb-2">
									<h4>Navigation</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-6 mb-0">
									<ul className="list list-footer-nav">
										<li>
											<Link to={HOME}>
												Home
											</Link>
										</li>
										<li>
											<Link to={ABOUTUS}>
												About Us
											</Link>
										</li>
										<li>
											<Link to={SERVICES}>
												Services
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-6">
									<ul className="list list-footer-nav">
										<li>
											<Link to={PORTFOLIO}>
												Portfolio
											</Link>
										</li>
										<li>
											<Link to={CONTACT}>
												Contact
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<h4>Reach Us</h4>

							<p>
                                Benjamin Maintenance<br/>
                                104 22nd Street<br/>
                                Brooklyn, NY 11232<br/>
                                <i className="fas fa-phone"></i> 212-535-8500 (NYC) <br/>
                                <i className="fas fa-phone"></i> 718-439-1200 (Brooklyn) <br/>
                                <i className="fas fa-phone"></i> 718-492-0194 (Fax) <br/>
                                <i className="far fa-envelope"></i> <a href="mailto:mail@example.com">mail@example.com</a> 
                            </p>

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