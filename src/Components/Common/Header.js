import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import headerLogo from '../../assets/images/united-brothers-header.png';
import { SITE_NAME } from '../../config';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { ABOUTUS, HOME , PORTFOLIO, SERVICES, ROOFING_SERVICE, EXTERIOR_RESTORATION_PAGE, FACILITY, CONTACT} from '../../routes';
import { IconButton } from '@rmwc/icon-button';
function Header({match}){
    const isActive = (route) => {
        if(route === HOME){
            return matchPath(match.path,{
                path: route,
                exact: true
            });
        } else {
            return matchPath(match.path,{
                path: route,
                exact: false
            });
        }
    }

    const [show,toggleShow] = useState(false);
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col>
                        <Container>
                            <Row className="pt-1 pb-1 pl-2 pr-2 d-flex align-items-center justify-content-center">
                                <Col xs={12} md={6} className="d-flex justify-content-center">
                                    <Link to={HOME}><img src={headerLogo} alt={SITE_NAME} className="img-fluid"/></Link>
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
                                                    <Link to={ROOFING_SERVICE}>Roofing Systems</Link>
                                                </span>
                                                <span>
                                                    <Link to={EXTERIOR_RESTORATION_PAGE}>Exterior Building Restoration</Link>
                                                </span>
                                                <span>
                                                    <Link to={PORTFOLIO}>Our Portfolio</Link>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="nav-row">
                    <Col xs={12} className="pl-2 pr-2">
                        <Collapse in={show} className="navbar-collapse">
                            <nav className="navbar">                            
                                <div className="nav-body">
                                    <div className={"nav-menu offset-md-1 pl-md-5"+(show?" show":"")}>
                                        <div className={"nav-link "+(isActive(HOME)?"active":"")}>
                                            <Link to={HOME}>
                                                <span>
                                                    Home
                                                </span>
                                            </Link>
                                        </div>
                                        <div className={"nav-link "+(isActive(PORTFOLIO)?"active":"")}>
                                            <Link to={PORTFOLIO}>
                                                <span>
                                                    Portfolio
                                                </span>
                                            </Link>
                                        </div>
                                       
                                        <div className={"nav-link dropdown-container "+(isActive(SERVICES)?"active":"")}>
                                            <Link to={SERVICES}>
                                                <span>
                                                    Our Services <i className="fas fa-caret-down"></i>
                                                </span>
                                            </Link>
                                            <ul className="dropdown-content">
                                                <Link to={EXTERIOR_RESTORATION_PAGE}>
                                                    <li className={(isActive(EXTERIOR_RESTORATION_PAGE)?"active":"")}>Exterior Building Restoration</li>
                                                </Link>
                                                <Link to={ROOFING_SERVICE}>
                                                    <li className={(isActive(ROOFING_SERVICE)?"active":"")}>Roofing Systems</li>
                                                </Link>
                                            </ul>
                                        </div>
                                        <div className={"nav-link dropdown-container "+(isActive(ABOUTUS)?"active":"")}>
                                            <Link to={ABOUTUS}>
                                                <span>
                                                    About Us <i className="fas fa-caret-down"></i>
                                                </span>
                                            </Link>
                                            <ul className="dropdown-content">
                                                <Link to={FACILITY}>
                                                    <li className={(isActive(FACILITY)?"active":"")}>Our Facility</li>
                                                </Link>
                                            </ul>
                                        </div>
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