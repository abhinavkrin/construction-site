import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { SITE_NAME, SITE_TAGELINE } from '../config';
import * as routes from '../routes';
import Footer from './Common/Footer';
import Header from './Common/Header';

const HomePage = lazy(() => import('./Home'));
const AboutUsPage = lazy(() => import('./AboutUs'));
const ServicesPage = lazy(() => import('./Services'));
const PortfolioPage = lazy(() => import('./Portfolio'));
const ContactPage = lazy(() => import('./ContactPage'));

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
                <Suspense fallback={<div/>}>
                    <HomePage/>
                </Suspense>
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
                <Suspense fallback={<div/>}>
                    <AboutUsPage/>
                </Suspense>
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
                <Suspense fallback={<div/>}>
                    <ServicesPage/>
                </Suspense>
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
                <Suspense fallback={<div/>}>
                    <PortfolioPage/>
                </Suspense>
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
                <Suspense fallback={<div/>}>
                    <ContactPage/>
                </Suspense>
            <Footer/>
        </>
    )
}]