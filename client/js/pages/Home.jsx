import React from "react";
import moment from "moment";
import Navigation from "../components/Navigation/Navigation.jsx";
import Map from "../components/Map/Map.jsx";

const Home = (props) => {

  // TODO make sure the timezone is correct
  const weddingDate = moment("2018-09-15 3pm -04", "YYYY-MM-DD ha Z");
  // console.log(weddingDate);

  return (
    <div>

      <h1 className="wedding__names">Sarah & Mike</h1>

      <hr style={{ marginBottom: 0 }} />
      <Navigation />

      <div className="hero">
        <div className="hero__img">
          <img src="img/mike-sarah-hueco-2012.jpg" alt="Mike and Sarah at Hueco Tanks in 2012"/>
        </div>
      </div>

      <hr />

      <div className="container">
        <section id="the-wedding" className="wedding">

          <div className="wedding__info">
            <div className="wedding__date">
              September 15, 2018
              <div className="wedding__from-now">
                {weddingDate.fromNow()}
              </div>
            </div>

            <div className="wedding__hotel">
              White Mountain Hotel
              <br/>
              North Conway, NH
            </div>
          </div>


          {/* <div className="wedding__blurb">Don&apos;t wear high heels, bitches!</div> */}
          <div className="wedding__map">
            <Map />
          </div>
        </section>

        <section id="accommodations">
          <h2>Accommodations</h2>
          <div>
            <h3>White Mountain Hotel</h3>
            <p>
              We have reserved a room block at the White Mountain Hotel, which will be released August 15. During peak season, the hotel requires a two night minimum stay.  Active military, AAA, and <span className="highlight">?</span> discounts are offered.  Breakfast is also included in the nightly rate.
            </p>
            <p>
              There are many other lodging options in North Conway and nearby towns, such as Intervale.  There are many chain hotels and some smaller motels. We have personally stayed at the White Trellis and the Swiss Chalet. Airbnb and VRBO are also great options for renting condos or houses that can accomodate multiple people.
            </p>
            <p>
              September is prime tourist season in New England, so many places will start filling quickly.
            </p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div>
            If you have any questions, don’t hesitate to contact us at <a href="mailto:sewelch@gmail.com">sewelch@gmail.com</a>
          </div>
        </section>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestiae voluptates atque, dolorem aperiam doloribus amet explicabo vero necessitatibus quasi rerum eaque velit tempora aut, adipisci qui fugit quisquam. Pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestiae voluptates atque, dolorem aperiam doloribus amet explicabo vero necessitatibus quasi rerum eaque velit tempora aut, adipisci qui fugit quisquam. Pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestiae voluptates atque, dolorem aperiam doloribus amet explicabo vero necessitatibus quasi rerum eaque velit tempora aut, adipisci qui fugit quisquam. Pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestiae voluptates atque, dolorem aperiam doloribus amet explicabo vero necessitatibus quasi rerum eaque velit tempora aut, adipisci qui fugit quisquam. Pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestiae voluptates atque, dolorem aperiam doloribus amet explicabo vero necessitatibus quasi rerum eaque velit tempora aut, adipisci qui fugit quisquam. Pariatur.</p>

    </div>
  );
};


export default Home;
