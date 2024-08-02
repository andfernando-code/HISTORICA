import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Explore.css";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <>
      <NavBar />
      <div className="explore-container">
        <div className="explore-box">
          <div className="explore-card">
            <Link to="/explore">
              <div className="image">
                <img src="images/img-1.jpg" alt="hi" />
                <h5>hello</h5>
              </div>
              <p>
                ijndijnfi4ntihvt5ni5tf v5tfuh5tnf5th f 5t ct45 fh5 tf5h f5 f 4tf
                4tunft4unf 4tf t4unf4thf 4 f 4uhtfh
              </p>
            </Link>
          </div>
          <div className="explore-card">
            <Link to="/explore">
              <div className="image">
                <img src="images/img-1.jpg" alt="hi" />
                <h5>hello</h5>
              </div>
              <p>
                ijndijnfi4ntihvt5ni5tf v5tfuh5tnf5th f 5t ct45 fh5 tf5h f5 f 4tf
                4tunft4unf 4tf t4unf4thf 4 f 4uhtfh
              </p>
            </Link>
          </div>
          <div className="explore-card">
            <Link to="/explore">
              <div className="image">
                <img src="images/img-1.jpg" alt="hi" />
                <h5>hello</h5>
              </div>
              <p>
                ijndijnfi4ntihvt5ni5tf v5tfuh5tnf5th f 5t ct45 fh5 tf5h f5 f 4tf
                4tunft4unf 4tf t4unf4thf 4 f 4uhtfh
              </p>
            </Link>
          </div>
          <div className="explore-card">
            <Link to="/explore">
              <div className="image">
                <img src="images/img-1.jpg" alt="hi" />
                <h5>hello</h5>
              </div>
              <p>
                ijndijnfi4ntihvt5ni5tf v5tfuh5tnf5th f 5t ct45 fh5 tf5h f5 f 4tf
                4tunft4unf 4tf t4unf4thf 4 f 4uhtfh
              </p>
            </Link>
          </div>
          <div className="explore-card">
            <Link to="/explore">
              <div className="image">
                <img src="images/img-1.jpg" alt="hi" />
                <h5>hello</h5>
              </div>
              <p>
                ijndijnfi4ntihvt5ni5tf v5tfuh5tnf5th f 5t ct45 fh5 tf5h f5 f 4tf
                4tunft4unf 4tf t4unf4thf 4 f 4uhtfh
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
