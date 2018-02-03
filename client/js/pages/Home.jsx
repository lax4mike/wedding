import React from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import TheWedding from "../components/TheWedding/TheWedding.jsx";
import RightArrow from "../components/Svg/RightArrow.jsx";
import Img from "../components/Img/Img.jsx";

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
        <Img
          src="img/mike-sarah-hueco-2012.jpg"
          alt="Mike and Sarah at Hueco Tanks in 2012"
          naturalWidth={600}
          naturalHeight={450}
        />
      </div>


      <section id="the-wedding" className="wedding">

        <div className="container">

          <h2>The Wedding</h2>

          <TheWedding />

          <p>
            The White Mountain Hotel is located in the heart of the Mt Washington Valley. The hotel is surrounded by Echo Lake State Park and sits at the foot of White Horse Ledge with views of Cathedral Ledge and the surrounding mountains.  Weather permitting, our ceremony will be on the lawn, and the cocktail hour and reception will be held under a tent on hotel grounds.
          </p>
        </div>
      </section>

      <section id="accommodations">

        <div className="container">
          <h2>Accommodations</h2>
          <div className="h3-section">
            <h3>White Mountain Hotel</h3>
            <p>
              We have reserved a room block at the White Mountain Hotel, which will be released August 15. During peak season, the hotel requires a two night minimum stay.  Active military, AAA, and AARP discounts are offered. A full breakfast is included in the nightly rate.
            </p>

            <div className="btn__holder">
              <a className="btn" target="_blank" rel="noopener noreferrer" href="http://www.whitemountainhotel.com">White Mountain Hotel website <RightArrow /></a>
            </div>

            <Img src="img/white-mountain-hotel.jpg"
              alt="White Mountain Hotel"
              naturalWidth={500}
              naturalHeight={416}
              caption="White mountain hotel at the base of Whitehorse Ledges"
            />
          </div>

          <div className="h3-section">
            <h3>Other Lodging</h3>
            <p>
              There are many other lodging options in North Conway and nearby towns, such as Intervale, Bartlett, Conway, and Jackson.  There are several chain hotels like the Holiday Inn Express, Residence Inn, and Comfort Inn located in the southern end of North Conway. There are smaller family motels scattered throughout along with bed and breakfasts. We have personally stayed at the White Trellis Motel and the Swiss Chalets Village Inn. <a target="_blank" rel="noopener noreferrer" href="https://www.airbnb.com">Airbnb</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.vrbo.com">VRBO</a> are also great options for renting condos or houses that can accomodate multiple people.
            </p>
            <p>
              September is prime tourist season in New England, so many places will start filling quickly.  Book something soon!
            </p>
          </div>
        </div>
      </section>

      <section id="getting-here">
        <div className="container">
          <h2>Getting Here</h2>
          <p>
              Three major airports service the North Conway/Mt. Washington Valley area: Logan Airport, Boston, MA (2:45 hours); Boston/Manchester Airport, Manchester, NH (2 hours);  and Portland International Jetport, Portland, ME (1:30 hours). Logan is the largest of the three airports. You will need a car to complete the trip to North Conway. Let us know if you are looking for a travel buddy, and we can put guests in touch with each other.
          </p>
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
