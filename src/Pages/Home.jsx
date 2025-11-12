import React from 'react';
import Banner from '../Components/Home/Banner';
import PropertyTypes from '../Components/Home/PropertyTypes';
import AboutUs from '../Components/Home/AboutUs';
import ChooseUsSection from '../Components/Home/ChooseUsSection';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <PropertyTypes></PropertyTypes>
        <AboutUs></AboutUs>
        <ChooseUsSection></ChooseUsSection>
        </>
    );
};

export default Home;