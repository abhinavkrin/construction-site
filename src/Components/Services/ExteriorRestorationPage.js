import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Carousel} from 'react-responsive-carousel';

//image imports
import OneNYPImg from '../../assets/images/services/exterior-restoration/ONE-NEW-YORK-PLAZA.jpg';
import brodway817Img from '../../assets/images/services/exterior-restoration/817-BROADWAY.jpg';
import thirdAveneue757Img from '../../assets/images/services/exterior-restoration/757-THIRD-AVENUE1.jpg';
import fifthAvenueImg from '../../assets/images/services/exterior-restoration/420-FIFTH-AVENUE.jpg';
import goldStreet300 from '../../assets/images/services/exterior-restoration/300-GOLD-STREET.jpg';
import parkAveneueSouth260 from '../../assets/images/services/exterior-restoration/260-PARK-AVENUE-SOUTH.jpg';
import parkAveneue245 from '../../assets/images/services/exterior-restoration/245-PARK-AVENUE.jpg';
import broadway140 from '../../assets/images/services/exterior-restoration/140-BROADWAY.jpg';
import eighthAvenue111 from '../../assets/images/services/exterior-restoration/111-EIGHTH-AVENUE.jpg';
import waterStreet55 from '../../assets/images/services/exterior-restoration/55_water_street.jpg';
import madisonAvenue79 from '../../assets/images/services/exterior-restoration/79-MADISON-AVENUE.jpg';
import ODHPlaza from '../../assets/images/services/exterior-restoration/ONE-DAG-HAMMARSKJOLD-PLAZA.jpg';
import broadway120 from '../../assets/images/services/exterior-restoration/120-BROADWAY.jpg';
import wallStreet120 from '../../assets/images/services/exterior-restoration/120-WALL-STREET.jpg';
import seventhAvenue787 from '../../assets/images/services/exterior-restoration/787-SEVENTH-AVENUE.jpg';
import HarborsideFC from '../../assets/images/services/exterior-restoration/HARBORSIDE-FINANCIAL-CENTER.jpg';
import aveneueOftheAmericas1285 from '../../assets/images/services/exterior-restoration/1285-AVENUE-OF-THE-AMERICAS.jpg';
import madisonAvenue600 from '../../assets/images/services/exterior-restoration/600-MADISON-AVENUE.jpg';
import parkAvenue500 from '../../assets/images/services/exterior-restoration/500-PARK-AVENUE.gif';
import oneParkAvenue from '../../assets/images/services/exterior-restoration/ONE-PARK-AVENUE.jpg';


const IMAGES =
[{
    src: OneNYPImg,
    caption: "One New York Plaza"
},{
    src: brodway817Img,
    caption: "817 Broadway"
},{
    src: thirdAveneue757Img,
    caption: "757 Third Avenue"
},{
    src: fifthAvenueImg,
    caption: "450 Fifth Avenue"
},{
    src: goldStreet300,
    caption: "300 Gold Street"
},{
    src: parkAveneueSouth260,
    caption: "260 Park Avenue South"
},{
    src: parkAveneue245,
    caption: "245 Park Avenue"
},{
    src: broadway140,
    caption: "140 Broadway"
},{
    src: eighthAvenue111,
    caption: "111 Eighth Avenue"
},{
    src: waterStreet55,
    caption: "55 Water Street"
},{
    src: madisonAvenue79,
    caption: "79 Madison Avenue"
},{
    src: ODHPlaza,
    caption: "One Dag Hammarskjold Plaza"
},{
    src: broadway120,
    caption: "120 Broadway"
},{
    src: wallStreet120,
    caption: "120 Wall Street"
},{
    src: seventhAvenue787,
    caption: "787 Seventh Avenue"
},{
    src: HarborsideFC,
    caption: "Harborside Financial Center"
},{
    src: aveneueOftheAmericas1285,
    caption: "1285 Avenue of the Americas"
},{
    src: madisonAvenue600,
    caption: "600 Madison Avenue"
},{
    src: parkAvenue500,
    caption: "500 Park Avenue"
},{
    src: oneParkAvenue,
    caption: "One Park Avenue"
}];

function ExteriorRestorationPage(){
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
                            <h2>Exterior Building Restoration</h2>                  
                            <div class="entry">	
                                <p><strong>Benjamin Maintenance</strong> understands the importance of fully identifying each challenge, offering on-site analysis and recommendations for solutions. And we have the expertise to do so with accuracy. We also employ only quality material, state-of-the-art procedures and sound craftsmanship as basic essentials for our solutions.</p>
                                <p><strong>WATERPROOFING/RESTORATION<br/></strong> Benjamin Maintenance locates the source of water infiltration and recommends cost-effective remedies. Sometimes just a sealant or coating is needed, more often repointing, recaulking and reconstruction. Our work consists of all repairs from replacing aluminum cappings and other elements to complete curtain wall restorations.</p>
                                <p>Restoration is occasionally cosmetic, dealing with applications of various coatings, or repair and replacement of masonry, ornate or sculptured details, usually on older or landmark structures. We call on our various sources of craftsmen and artisans in rebuilding, replacing and repairing, utilizing steel pinning, epoxies and other procedures.</p>
                                <p><strong>SURFACE CLEANING</strong><br/> Our service includes the cleaning of masonry and other surfaces with various chemical solvents and high and low pressure washing. Our method is determined by the special requirements of your facade material. Cleaning is more than superficial, since accumulated pollution residue is destructive.</p>
                                <p><strong>LOCAL LAW 11</strong><br/> Benjamin Maintenance is available to inspect and correct problems in violation of Local Law 10/80. We are always ready for quick-response and emergency repair when required.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
}

export default ExteriorRestorationPage;