import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Cards from "../Cards";
import NavBar from "../NavBar";
import './Home.css';

function Home() {
  return (
    <>
      <div className="all">
        <NavBar />
        <HeroSection />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default Home;
