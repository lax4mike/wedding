import React from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import TheWedding from "../components/TheWedding/TheWedding.jsx";
import RightArrow from "../components/Svg/RightArrow.jsx";

const Home = (props) => {

  return (
    <div>

      <div className="wedding__names">
        <div className="container">
          {/* <div className="save-the-date">
            <div className="save-the-date__names">
              <h1>Sarah & Mike</h1>
            </div>
            <div className="save-the-date__img1" />
            <div className="save-the-date__img2" />
            <div className="save-the-date__poo">some text</div>
          </div> */}
          <h1>Sarah & Mike</h1>
        </div>
      </div>

      <Navigation />

      <div className="hero">
        <div className="img">
          {/* height so the page doesn't jump when the image is loaded */}
          <div className="img__frame" style={{ height: 450 }}>
            <img src="img/mike-sarah-hueco-2012.jpg" alt="Mike and Sarah at Hueco Tanks in 2012" />
          </div>
        </div>
      </div>


      <section id="the-wedding" className="wedding">

        <div className="container">

          <h2>The Wedding</h2>

          <TheWedding />
        </div>
      </section>

      <section id="accommodations">

        <div className="container">
          <h2>Accommodations</h2>

          <div className="img">
            <div className="img__frame" style={{ height: 416 }}>
              <img src="img/white-mountain-hotel.jpg" alt="White Mountain Hotel" />
            </div>
          </div>


          <div className="h3-section">
            <h3>White Mountain Hotel</h3>

            <p>
              We have reserved a room block at the White Mountain Hotel, which will be released August 15. During peak season, the hotel requires a two night minimum stay.  Active military, AAA, and <span className="highlight">?</span> discounts are offered.  Breakfast is also included in the nightly rate.
            </p>


            <div className="btn__holder">
              <a className="btn" target="_blank" rel="noopener noreferrer" href="http://www.whitemountainhotel.com">View website <RightArrow /></a>
            </div>
          </div>


          <div className="h3-section">
            <h3>Other lodging</h3>
            <p>
              There are many other lodging options in North Conway and nearby towns, such as Intervale.  There are many chain hotels and some smaller motels. We have personally stayed at the White Trellis and the Swiss Chalet. <a target="_blank" rel="noopener noreferrer" href="https://www.airbnb.com">Airbnb</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.vrbo.com">VRBO</a> are also great options for renting condos or houses that can accomodate multiple people.
            </p>
            <p>
              September is prime tourist season in New England, so many places will start filling quickly.  Book something soon!
            </p>
          </div>
        </div>

      </section>

      <section id="getting-there">

        <div className="container">
          <h2>Getting there</h2>



        </div>
      </section>

      <section id="contact">
        <div className="container contact">
          <h2>Contact</h2>
          <div>
            If you have any questions, don’t hesitate to contact us at <a href="mailto:sewelch@gmail.com">sewelch@gmail.com</a>
          </div>
        </div>
      </section>

    </div>
  );
};


export default Home;
