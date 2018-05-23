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
          <h2>are getting married!</h2>
        </div>
      </div>

      <div className="main">
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
                caption="White Mountain Hotel at the base of Whitehorse Ledge"
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
            <div className="getting-here__address">

              <div><strong>The White Mountain Hotel</strong></div>
              <div>87 Fairway Drive</div>
              <div>North Conway, NH 03860</div>

              <div className="getting-here__map">
                (&nbsp;
                <a href="https://www.google.com/maps?cid=7327877798571800783"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  map
                </a>
                &nbsp;)
              </div>
            </div>
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

        <section id="things-to-do" className="Things-to-do">
          <div className="container">
            <h2>Things to do</h2>
            <p>
              There are activities for everyone in North Conway! Hike, swim, shop, site-see, or play golf at Hale's Location Golf Course at the White Mountain Hotel.
            </p>
            <h3>Shopping and Eating</h3>
            <p>A walk along North Main St. (Rt. 16) in North Conway will take you past eclectic shops, art galleries, the Mount Washington Observatory Weather Discovery Center, and many outdoor gear stores. You can get your coffee at the Frontside Grind or the Met Coffeehouse, or enjoy a sit-down breakfast at Stairway Cafe or Peach's. A few blocks north of River Road, Bagel's Plus is one of our favorite pre-activity breakfast/lunch places.  For dinner, The Moat Mountain Smokehouse & Brewing Company and Flatbreads are popular options.
            </p>
            <p> At the southern end of town, Settlers Green Outlet Village has many outlets, including an LL Bean.  Naturally, our favorite store is the climbing shop, International Mountain Equipment, which has a robust consignment section in the basement which is fun to browse.
            </p>
            <h3>Hiking and Outdoors</h3>
            <p>
              There are hikes and walks to suit every level of adventurer in the Mount Washington Valley. Trails in <a href="https://www.nhstateparks.org/visit/state-parks/echo-lake-state-park.aspx" target="_blank" rel="noopener noreferrer">Echo Lake State Park</a> can be accessed directly from the White Mountain Hotel. See a trail map <a href="https://www.nhstateparks.org/uploads/pdf/EchoLakeSP_TrailMap_Web.pdf" target="_blank" rel="noopener noreferrer">here</a>. For the more adventurous, the best hike is to take the White Horse Ledge Trail to the top of White Horse Ledge.  You can also take a side hike to the top of Cathedral Ledge along the Bryce Path. We have climbed extensively at both cliffs.  You will have pleasant views and likely see some rock-climbers as well.  For an easier hike, try the loop around Echo Lake, though you may need to pay a park entrance fee. You can also swim at the park beach or in the Saco River where is crosses under River Road (no lifeguard there). <a href="http://northconwaynh.com/dianas-baths/" target="_blank" rel="noopener noreferrer">Diana's Baths</a> is a also a really nice short walk/hike that features a series of cascading falls and pools.
            </p>
            <p>
              For a more leisurely experience, you can drive to the top of Cathedral Ledge via Cathedral Ledge Road and a very short flat walk will take you to a veiwing point on the top of the cliff.
            </p>
            <p>
              If you have a little more time and feel ready for a more strenuous outing, Square Ledge has possibly the best views in the valley for the least effort (.5 miles one way). If you reach the summit, you will be looking directly across Pinkham Notch into Huntington and Tuckerman Ravine on Mt. Washington. There is a short description <a href="https://www.outdoors.org/articles/blogs/current-conditions-blog/ascending-square-ledge" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5406395.pdf" target="_blank" rel="noopener noreferrer">here</a>. Incidentally, I (Sarah) did some of my first outdoor climbing here twenty years ago!  If you do this hike, be prepared for a typical rugged New England trail, meaning rooty, rocky, possibly muddy, and steep!
            </p>
            <p>
              If you want to hike one of the Presidential mountains or Mt. Washington, you will need an entire day.  Talk to us if you are interested.
            </p>
            <h3>Scenic Rides</h3>
            <p>
              Want to see the summit of Mt. Washington, but not convinced you can do it with your own legs? Drive the <a href="https://mtwashingtonautoroad.com/" target="_blank"  rel="noopener noreferrer">Mt Washington Auto Road</a> or take the <a href="https://www.thecog.com/" target="_blank"  rel="noopener noreferrer">Cog Railway</a> to the summit.  Bring solid shoes, a coat, and your camera!
            </p>

          </div>
        </section>

        <section id="our-adventures">
          <div className="container">
            <h2>Our adventures</h2>
            <p>Sarah and Mike met at the climbing gym in 2009.  They&apos;ve been going on outdoor adventures together ever since. </p>
          </div>
          <Gallery />
        </section>

        <section id="registry" className="registry">
          <div className="container">
            <h2>Registry</h2>
            <div>
              We are registered at

              <div className="registry__stores">
                <a target="_blank" href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=545838444&pwsurl=&searchParam=Welch%20Lambert" rel="noopener noreferrer">
                  <img src="../img/bed-bath-beyond.png" alt="Bed Bath and Beyond" />
                </a>
                <br/>
                <a target="_blank" href="https://www.williams-sonoma.com/registry/rv7bv5f6zq/registry-list.html" rel="noopener noreferrer">
                  <img src="../img/williams-sonoma.png" alt="Williams Sonoma" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact">
            <h2>Contact</h2>
            <div>
              <span>If you have any questions,</span> <span>don’t hesitate to email us at</span>
              <br/>
              <a href="mailto:contact@sarahandmikewedding.com">contact@sarahandmikewedding.com</a>
              <br/>
              <br/>
              or give Mike a call at (602) 451-0571
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default Home;
