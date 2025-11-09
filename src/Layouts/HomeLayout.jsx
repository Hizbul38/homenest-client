import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Home/Banner';
import PopularCities from '../Components/Home/PopularCities';
import ChooseUs from '../Components/Home/ChooseUs';
import Testimonials from '../Components/Home/Testimonials';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <PopularCities></PopularCities>
            <ChooseUs></ChooseUs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;