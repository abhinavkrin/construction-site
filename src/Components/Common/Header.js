import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/logo.png';
import { SITE_NAME } from '../../config';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { ABOUTUS, HOME,CONTACT , PROJECTS, SERVICES} from '../../routes';
import { IconButton } from '@rmwc/icon-button';
function Header({match}){
    const isActive = (route) => matchPath(match.path,{
        path: route,
        exact: true
    });

    const [show,toggleShow] = useState(false);
    return (
        <header>
            <Container fluid className="pl-2 pr-2">
                <nav className="navbar">
                    <div className="nav-brand">
                        <img src={logo} alt={SITE_NAME} className="img-fluid nav-logo"/>
                    </div>                    
                    <div className="nav-btn">
                        <IconButton icon="menu" onClick={()=>toggleShow(!show)}/>
                    </div>
                    <div className={"nav-body "}>
                        <div className={"nav-menu"+(show?" show":"")}>
                            <Link to={HOME} className={"nav-link "+(isActive(HOME)?"active":"")}>
                                <span>
                                    Home
                                </span>
                            </Link>
                            <Link to={ABOUTUS} className={"nav-link "+(isActive(ABOUTUS)?"active":"")}>
                                <span>
                                    Company
                                </span>
                            </Link>
                            <Link to={SERVICES} className={"nav-link "+(isActive(SERVICES)?"active":"")}>
                                <span>
                                    Services
                                </span>
                            </Link>
                            <Link to={PROJECTS} className={"nav-link "+(isActive(PROJECTS)?"active":"")}>
                                <span>
                                    Projects
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
            </Container>
        </header>
    )
}

export default withRouter(Header);