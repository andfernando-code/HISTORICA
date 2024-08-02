import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Cards from '../Cards';
import NavBar from "../NavBar";

function Home () {
    return (
        <>
        <NavBar />
        <HeroSection />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;