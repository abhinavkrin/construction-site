import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import headerLogo from '../../assets/images/united-brothers-header.png';
import { SITE_NAME } from '../../config';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { ABOUTUS, HOME,CONTACT , PORTFOLIO, SERVICES} from '../../routes';
import { IconButton } from '@rmwc/icon-button';
function Header({match}){
    const isActive = (route) => matchPath(match.path,{
        path: route,
        exact: true
    });

    const [show,toggleShow] = useState(false);
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col>
                        <Container>
                            <Row className="pt-1 pb-1 pl-2 pr-2 d-flex align-items-center justify-content-center">
                                <Col xs={12} md={6} className="d-flex justify-content-center">
                                    <img src={headerLogo} alt={SITE_NAME} className="img-fluid"/>
                                    <div className="d-flex align-items-center">                  
                                        <div className="nav-btn">
                                            <IconButton icon="menu" onClick={()=>toggleShow(!show)}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="pr-md-5">
                                    <Row>
                                        <Col xs={12} className="d-flex flex-column justify-content-center text-center mr-md-5 pr-md-5">
                                            <div className="header-links">
                                                <span>
                                                    <strong>WHAT WE DO</strong>
                                                </span>
                                                <span>
                                                    <Link>Roofing Systems</Link>
                                                </span>
                                                <span>
                                                    <Link>Exterior Building Restoration</Link>
                                                </span>
                                                <span>
                                                    <Link>Our Portfolio</Link>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="pl-2 pr-2" style={{borderBottom: "2px solid var(--primary)"}}>
                        <Collapse in={show} className="navbar-collapse">
                            <nav className="navbar">                            
                                <div className="nav-body">
                                    <div className={"nav-menu offset-md-1 pl-md-5"+(show?" show":"")}>
                                        <Link to={HOME} className={"nav-link "+(isActive(HOME)?"active":"")}>
                                            <span>
                                                Home
                                            </span>
                                        </Link>
                                        <Link to={SERVICES} className={"nav-link "+(isActive(SERVICES)?"active":"")}>
                                            <span>
                                                Services
                                            </span>
                                        </Link>
                                        <Link to={PORTFOLIO} className={"nav-link "+(isActive(PORTFOLIO)?"active":"")}>
                                            <span>
                                                Portfolio
                                            </span>
                                        </Link>
                                        <Link to={ABOUTUS} className={"nav-link "+(isActive(ABOUTUS)?"active":"")}>
                                            <span>
                                                About Us
                                            </span>
                                        </Link>
                                        <Link to={CONTACT} className={"nav-link "+(isActive(CONTACT)?"active":"")}>
                                            <span>
                                                Contact
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default withRouter(Header);