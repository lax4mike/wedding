import React from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import TheWedding from "../components/TheWedding/TheWedding.jsx";
import RightArrow from "../components/Svg/RightArrow.jsx";
import Img from "../components/Img/Img.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";

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
          caption="Mike and Sarah at Hueco Tanks in 2012"
        />
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
          <div className="h3-section">
            <h3>White Mountain Hotel</h3>
            <p>
              We have reserved a room block at the White Mountain Hotel, which will be held until August 15. Call the reservation line at 800-533-6301 and mention our names when you reserve.
            </p>
            <p>
              The hotel requires a two night minimum stay.   Active military, AAA, and AARP discounts are offered. A full breakfast is included in the nightly rate.
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
              There are many other lodging options in North Conway and nearby towns, such as Intervale, Bartlett, Conway, and Jackson.  There are several chain hotels like the Holiday Inn Express, Residence Inn, and Comfort Inn located in the southern end of North Conway. There are smaller family motels scattered throughout along with bed and breakfasts. We have personally stayed at the White Trellis Motel and the Swiss Chalets Village Inn, which are less expensive local motels. <a target="_blank" rel="noopener noreferrer" href="https://www.airbnb.com">Airbnb</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.vrbo.com">VRBO</a> are also great options for renting condos or houses that can accomodate multiple people.
            </p>
            <p>
              The <a target="_blank" rel="noopener noreferrer" href="http://mtwashingtonvalley.org/visit/where-to-stay.cfm">Mt. Washington Valley Chamber of Commerce</a> website has a searchable list of lodging options.
            </p>
            <p>
              September is prime tourist season in New England, so many places will start filling quickly.  Book something soon!
            </p>
          </div>
        </div>
      </section>

      <section id="getting-here" className="getting-here">
        <div className="container">
          <h2>Getting Here</h2>
          <p>
            Three major airports service the North Conway/Mt. Washington Valley area:
          </p>
          <ul>
            <li>Logan Airport, <strong>Boston, MA</strong> (2:45 hours from North Conway). This is the largest of the three airports.</li>
            <li>Boston/Manchester Airport, <strong>Manchester, NH</strong> (2 hours).</li>
            <li>Portland International Jetport, <strong>Portland, ME</strong> (1:30 hours).</li>
          </ul>
          <p>
             You will need a car to complete the trip to North Conway. Let us know if you are looking for a travel buddy, and we can put guests in touch with each other.
          </p>
        </div>
      </section>

      <section id="contact">
        <div className="container contact">
          <h2>Contact</h2>
          <div>
            If you have any questions, don’t hesitate to email us at
            <br/>
            <a href="mailto:contact@sarahandmikewedding.com">contact@sarahandmikewedding.com</a>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <Gallery />
        </div>
      </section>

    </div>
  );
};


export default Home;
