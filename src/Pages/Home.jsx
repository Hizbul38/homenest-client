import React from 'react';
import Banner from '../Components/Home/Banner';
import PropertyTypes from '../Components/Home/PropertyTypes';
import AboutUs from '../Components/Home/AboutUs';
import ChooseUsSection from '../Components/Home/ChooseUsSection';
import FeaturedRecentProperties from '../Components/Home/FeaturedRecentProperties';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <FeaturedRecentProperties></FeaturedRecentProperties>
        <AboutUs></AboutUs>
        <ChooseUsSection></ChooseUsSection>
        <PropertyTypes></PropertyTypes>
        </>
    );
};

export default Home;