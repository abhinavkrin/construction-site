import React from 'react';
import CustomCarousel from '../Common/CustomCarousel';

import brookfieldImg from '../../assets/images/portfolio/brookfield_place.jpg';
import chaninImg from '../../assets/images/portfolio/chanin_building.jpg';
import rxrRealityImg from '../../assets/images/portfolio/rxr_reality.jpg';
import rfrRealityImg from '../../assets/images/portfolio/rfr_reality.jpg';
import rfr17StateStreetImg from '../../assets/images/portfolio/rfr_17_state_street.jpg';
import timeWarnerCenterImg from '../../assets/images/portfolio/time_warner_center.jpg';
import harbourSideImg from '../../assets/images/portfolio/harborside_financial.jpg';
import avenueImg from '../../assets/images/portfolio/787_7th_avenue.jpg';
import rubenImg from '../../assets/images/portfolio/ruben_companies.jpg';
import goldmanSachs from '../../assets/images/portfolio/goldman_sachs.jpg';




const carouselData = [{
    title: "Brookfield Place",
    body: "Benjamin Maintenance is proud to serve Brookfield Properties, including New York City’s prime waterside commerce centers, Brookfield Place. Benjamin Maintenance has provided intricate public protection of Winter Garden while performing complete Local Law 11 Caulking throughout 250 Vesey Street, 200 Liberty Street and 200 Vesey Street. We have performed extensive waterproofing repairs to the all glass Winter Garden dome as well, ensuring safety to all pedestrians in this busy epicenter of New York City, and [...]",
    image: brookfieldImg
},{
    title: "Chanin Building",
    body: "Benjamin Maintenance proudly serves The Stahl Organization, owners of the art deco icon, the Chanin Building. Located in the heart of midtown east, this 56-story landmark building is clad in buff brick and terra cotta. The facade illustrates an intricate terra cotta decorative panel, which our expertise masons carefully remove, salvage, and replace; working closely with California based terra cotta manufacturers, Gladding McBean. We have also performed removal and replacement of over 3,000 units of [...]",
    image: chaninImg
},{
    title: "RXR Realty",
    body: "Benjamin Maintenance is proud to serve one of New York City’s most dynamic and iconic building portfolios, RXR Realty. At 230 Park Avenue, we restored entire cupola, performed extensive terra cotta column probes, working closely with engineers to design best solutions for next phase of Local Law 11 work. At 620 Avenue of America we performed complete Local Law 11 of all four facades at this iconic landmark building.",
    image: rxrRealityImg
},{
    title: "RFR Realty",
    body: "Benjamin Maintenance proudly serves several RFR locations throughout the Tri-State region.Â  We have performed complete roof replacement with 20 year NDL Siplast warranties at the Lever House, 275 Madison, 757 3rd Avenue and the Seagram Building.Â  We have also performed several technical faÃ§ade restorations, projects that demand only the highest standard of workmanship and craftsmanship to meet RFR standards of quality.",
    image: rfrRealityImg
},{
    title: "RFR 17 State Street",
    body: "We removed and replaced the entire plaza and sidewalk level of 17 State Street, which included new roof assembly, flame granite instillation, concrete sidewalk and Bomanite textured cements finish all in compliance with the Downtown Alliance.Â  BM repaired stainless steel base column covers along with installation of planters and benches along 17 State Streets plaza where pedestrian cans can sit down and look upon one of downtown Manhattanâ€™s finest architectural beacons, 17 State Street.",
    image: rfr17StateStreetImg
},{
    title: "AOL/Time Warner Center",
    body: "Benjamin maintenance has performed extensive, landmark compliant, faÃ§ade restoration projects throughout 75 Rockefeller Center.Â  In addition, we have replaced the roof and garden roof sections.Â  At 1 Columbus, Â Benjamin has performed caulking throughout this midtown beauty and waterproofed the mechanical rooms within the Time Warner Center building.",
    image: timeWarnerCenterImg
},{
    title: "1, 2, 3 Harborside Financial",
    body: "Benjamin Maintenance has performed complete new roof systems with paver plaza access to the roof gardens at these Jersey City financial institutions.Â  We have caulked and coated various facades throughout the Harborside Financial Center to eliminate water infiltration, and performed several faÃ§ade restoration projects at 101 Hudson.",
    image: harbourSideImg
},{
    title: "CBRE – 787 7th Avenue",
    body: "Benjamin Maintenance has performed several restoration projects throughout envelope of 787 7th avenue including caulking, pointing, Local law 11 work, granite replacement, faÃ§ade cleaning and roofing of this midtown gem.Â  Benjamin Maintenance proudly serves countless other CBRE properties including 32 Old Slip, 2 Park Avenue and 3 World Financial to name a few.",
    image: avenueImg
},{
    title: "Ruben Companies",
    body: "Over the past three decades, we have performed several large scale restoration projects for Lawrence Ruben at this location and throughout the NYC regions and Boston metropolis.Â  A complete glass to metal and metal to metal faÃ§ade caulking was performed.Â  We rebuilt and waterproofed the entire plaza, waterfall and recreation area using Siplast warranty, Bomanite stamped concrete and the highest standard of craftsmanship.",
    image: rubenImg
},{
    title: "Goldman Sachs",
    body: "Benjamin Maintenance removed and replaced approximately 300,000 square feet of roofing above Goldman Sachs data centers with 25 Year NDL Siplast roof assembly.Â  Benjamin Maintenance proudly serves Goldman Sachs facilities throughout the Tri-State area.",
    image: goldmanSachs
}];

function PortfolioCarousel(){
    return <CustomCarousel data={carouselData}/>
}
export default PortfolioCarousel;