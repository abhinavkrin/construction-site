import React from 'react';
import { Helmet } from 'react-helmet';
import { SITE_NAME, SITE_TAGELINE } from '../config';
import * as routes from '../routes';
import AboutUsPage from './AboutUs';
import Footer from './Common/Footer';
import Header from './Common/Header';
import HomePage from './Home';
import ServicesPage from './Services';
import ExteriorRestorationPage from './Services/ExteriorRestorationPage';
import RoofingPage from './Services/RoofingPage';
import PortfolioPage from './Portfolio';
import ContactPage from './ContactPage';

// const HomePage = lazy(() => import('./Home'));
// const AboutUsPage = lazy(() => import('./AboutUs'));
// const ServicesPage = lazy(() => import('./Services'));
// const RoofingPage = lazy(() => import('./Services/RoofingPage'));
// const ExteriorRestorationPage = lazy(() => import('./Services/ExteriorRestorationPage'));
// const PortfolioPage = lazy(() => import('./Portfolio'));
// const ContactPage = lazy(() => import('./ContactPage'));


export const Pages = [{
    displayName: 'Home',
    path: routes.HOME,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>{SITE_NAME} | {SITE_TAGELINE}</title>
            </Helmet>
            <HomePage/>
            <Footer/>
        </>
    )
},{
    displayName: 'About Us',
    path: routes.ABOUTUS,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>AboutUs | {SITE_NAME}</title>
            </Helmet>
            <AboutUsPage/>
            <Footer/>
        </>
    )
},{
    displayName: 'Services',
    path: routes.SERVICES,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>Our Services | {SITE_NAME}</title>
            </Helmet>
            <ServicesPage/>
            <Footer/>
        </>
    )
},{
    displayName: 'Roofing Service',
    path: routes.ROOFING_SERVICE,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>Roofing Service | {SITE_NAME}</title>
            </Helmet>
            <RoofingPage/>
            <Footer/>
        </>
    )
},{
    displayName: 'Exterior Building Restoration',
    path: routes.EXTERIOR_RESTORATION_PAGE,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>Exterior Building Restoration | {SITE_NAME}</title>
            </Helmet>
            <ExteriorRestorationPage/>
            <Footer/>
        </>
    )
},{
    displayName: 'Our Portfolio',
    path: routes.PORTFOLIO,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>Our Portfolio | {SITE_NAME}</title>
            </Helmet>
            <PortfolioPage/>
            <Footer/>
        </>
    )
},{
    displayName: 'Contact',
    path: routes.CONTACT,
    exact: true,
    component: () => (
        <>
            <Header/>
            <Helmet>
                <title>Contact Us | {SITE_NAME}</title>
            </Helmet>
            <ContactPage/>
            <Footer/>
        </>
    )
}]