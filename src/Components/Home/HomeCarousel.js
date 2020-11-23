import React from 'react';
import extBuildingThumb from '../../assets/images/ext_building_res_thumb.jpg';
import welcomeThumb from '../../assets/images/welcome_thumb.jpg';
import portfolioThumb from '../../assets/images/portfolio_thumb.jpg';
import roofingThumb from '../../assets/images/roofing_thumb.jpg';
import CustomCarousel from '../Common/CustomCarousel';


const carouselData = [{
    title: "Welcome",
    body: "Benjamin Maintenance is located in Brooklyn New York and services the Greater New York City Metropolitan Area.  Benjamin Maintenance Corp is one of New York City’s leading contractors in the field of Exterior Building Restoration, Waterproofing Systems, Roofing Systems, and Plaza Deck Pavers.",
    image: welcomeThumb 
},{
    title: "Exterior Building Restoration",
    body: "View some of the more recognized projects we have completed and a partial list of satisfied and continuous clients, both from our Roofing and Restoration Divisions. All graphic photos of buildings you see on this web site, are actual projects that have been completed by Benjamin Maintenance.",
    image: extBuildingThumb
},{
    title: "Roofing Systems",
    body: "Through efficiency and close supervision we are able to be more costeffective in our production and on-time completions, and therefore aggressively competitive in pricing.",
    image: roofingThumb
},{
    title: "Our Portfolio",
    body: "TheÂ Benjamin Maintenance portfolio showcases our prestigious list of clients and their properties.",
    image: portfolioThumb
}]
function HomeCarousel(){
    return <CustomCarousel data={carouselData} />
}
export default HomeCarousel;