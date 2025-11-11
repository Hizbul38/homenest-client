import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Home/Banner';
import PropertyTypes from '../Components/Home/PropertyTypes';
import AboutUs from '../Components/Home/AboutUs';
import ChooseUsSection from '../Components/Home/ChooseUsSection';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            <Banner></Banner>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <PropertyTypes></PropertyTypes>
            <AboutUs></AboutUs>
            <ChooseUsSection></ChooseUsSection>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;