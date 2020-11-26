import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Carousel} from 'react-responsive-carousel';

//image imports
import Broadway120Img from '../../assets/images/services/roofing/120-BROADWAY1.jpg';
import WallStreetImg from '../../assets/images/services/roofing/120-WALL-STREET1.jpg';
import WTCImg from '../../assets/images/services/roofing/7-WORLD-TRADE-CENTER1.jpg';
import IBMHeadquartersImg from '../../assets/images/services/roofing/IBM-Headquarters.jpg';
import FashionIOTImg from '../../assets/images/services/roofing/Fashion-Institute-of-Tech.jpg';
import ThirdAveneueImg from '../../assets/images/services/roofing/757-Third-Avenue.jpg';
import W33rdStreetImg from '../../assets/images/services/roofing/450-W.jpg';
import WaterStreetImg from '../../assets/images/services/roofing/175-Water-Street.jpg';
import HudsonStreetImg from '../../assets/images/services/roofing/60-Hudson-Street.jpg';
import BatteryImg from '../../assets/images/services/roofing/17-Battery.jpg';
import HippodromeImg from '../../assets/images/services/roofing/The-Hippodrome-Building.jpg';
import EquitableImg from '../../assets/images/services/roofing/The-Equitable-Building.jpg';
import LincolnTowerImg from '../../assets/images/services/roofing/Lincoln-Towers.jpg';
import BMWHeadImg from '../../assets/images/services/roofing/BMW-Headquarters.jpg';
import BankOfNewYorkImg from '../../assets/images/services/roofing/Bank-Of-New-York.jpg';
import Broadway1700Img from '../../assets/images/services/roofing/1700-Broadway.jpg';

const IMAGES =
[{
    src: Broadway120Img,
    caption: "120 Broadway"
},
{
        src: WallStreetImg,
        caption: "120 Wall Street"
},
{
        src: WTCImg,
        caption: "7 World Trade Center"
},
{
    src: IBMHeadquartersImg,
    caption: "IBM Headquarters"
},
{
    src: FashionIOTImg,
    caption: "Fashion Institute Of Technology"
},

{
    src: ThirdAveneueImg,
    caption: "757 Third Avenue"
},{
    src: W33rdStreetImg,
    caption: "450 W. 33rd Street"
},
{
    src: WaterStreetImg,
    caption: "175 Water Street"
},
{
    src: HudsonStreetImg,
    caption: "60 Hudson Street"
},{
    src: BatteryImg,
    caption: "17 Battery Park"
},{
    src: HippodromeImg,
    caption: "The Hippodrome Building"
},{
    src: EquitableImg,
    caption: "The Equitable Building"
},{
    src: LincolnTowerImg,
    caption: "Lincoln Towers"
},{
    src: BMWHeadImg,
    caption: "BMW Headquarters"
},{
    src: BankOfNewYorkImg,
    caption: "Bank of New York"
},{
    src: Broadway1700Img,
    caption: "1700 Broadway"
}];

function RoofingPage(){
    return (
        <div className="w-100 content">
            <Container className="pt-3 pb-3 pt-md-5 pb-md-5">
                <Row>
                    <Col xs={12} lg={5} className="p-3 mt-3">
                        <div className="service-slider">
                            <Carousel 
                                showArrows={true} 
                                width={300}
                                dynamicHeight={true}>
                                {IMAGES.map((image,i)=> (
                                    <div key={"slide"+i}>
                                        <img src={image.src} alt={image.caption}/>
                                        <p className="legend">{image.caption}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                    <Col xs={12} lg={7} className="mt-3">
                        <div id="portfolio-content">
                            <h3>Roofing Projects</h3>
                            <div className="entry">	
                                <p><strong>Benjamin Maintenance Corp.</strong>, has consistently maintained unusually high standards and an enviable position in its work performance record,covering many and diverse projects in the Metropolitan New York City area.</p>
                                <p>Our principals set out with a prior expertise in their craft and the premise that through hard work and the maintenance of the highest standards of excellence on every project, success would be realized. To ensure those high quality standards, each project has been closely and personally supervised by at least one of our partners. Our carefully selected and experienced craftsmen in the field all share our guide-lines and goals, and consequently we have been able to maintain our objectives since the beginning, with the results being precisely as planned.</p>
                                <p><strong>OUR COMPETITIVE EDGE:</strong> Through efficiency and close supervision we are able to be more costeffective in our production and on-time completions, and therefore aggressively competitive in pricing.</p>
                                <p><strong>INSTALLATION EXPERIENCE:</strong> Our experience has covered new, old and landmark structures, Commercial, Residential, Industrial and Institutional in a broad spectrum of waterproofing materials and systems. These have been conventional built-up, modified bitumen, multi-ply roofing to single-ply membrane installations, flat and tapered insulation, flat and steep roofing with slag, slate and tile, and paver roofdeck systems. We also offer services in masonry waterproofing and restoration. And to service our many projects, we maintain a fleet of more then fifteen trucks including Knuckle Boom lifting equipment and a full range of specialized equipment,including state-of-the-art hydraulic hoists.</p>
                                <p><strong>FINANCIAL DEPENDABILITY:</strong> Benjamin Maintenance has been fully approved by most prime roofing system manufacturers including Firestone, Brai, Garland, Manville and others. Based on our track record, our installations automatically earn their seal of approval with full warranty coverage. We have also earned their respect for our creative handling of their system applications for special or unusual conditions. Our company is financially stable, fully insured and has a bondability sufficient to handle any project that we might undertake, regardless of size and scope.</p>
                                <p><strong>PRESTIGIOUS PROJECT EXPERIENCE:</strong> Previous pages on this site have illustrated just a few of the many well known office structures with which Benjamin Maintenance has been involved in recent years. Of special note are the reroofing projects for the Harborside Financial Center in Jersey City, N.J, and The Prudential, Paine Webber, 7 World Trade Center and The Bank of New York Mellon in Manhattan.</p>
                                <p>&nbsp;</p>
                            </div>                                              
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default RoofingPage;