import React from 'react';
import Banner from '../Banner/Banner';
import OurBenefit from '../OurBenifit/OurBenefit';
import TourDestinations from '../TourDestinations/TourDestinations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourDestinations></TourDestinations>
            <OurBenefit></OurBenefit>
        </div>
    );
};

export default Home;