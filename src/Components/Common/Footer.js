import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUTUS, HOME } from '../../routes';
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
					<div className="row pt-4 pb-4 text-center text-md-left">

						<div className="col-md-5 offset-md-1">
							<h4>Contact Us</h4>

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

						<div className="col-md-4">
							<div className="row">
								<div className="col-lg-6 mb-2">
									<h4>Service Pages</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-12 mb-0">
									<ul className="list list-footer-nav">
										<li>
											<Link to={HOME}>
												Roofing Systems
											</Link>
										</li>
										<li>
											<Link to={ABOUTUS}>
												Exterior Building Restoration
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