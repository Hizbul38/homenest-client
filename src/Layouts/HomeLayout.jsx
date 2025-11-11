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
            <header>
                <Navbar></Navbar>
            <Banner></Banner>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <PopularCities></PopularCities>
            <ChooseUs></ChooseUs>
            <Testimonials></Testimonials>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;