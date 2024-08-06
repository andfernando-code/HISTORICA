import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Explore.css";
import CardItem from "../CardItem";

export default function Explore() {
  return (
    <>
      <NavBar />
      <div className="explore-cards-container">
      <div className="cards">
        <h1>hello i'm nipuna</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Travel through the Isalands of Bali in a private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
