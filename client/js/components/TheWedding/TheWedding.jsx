import React from "react";
import R from "ramda";
import moment from "moment";

import RightArrow from "../Svg/RightArrow.jsx";

// https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
const WHITE_MOUNTAIN_HOTEL_PLACE_ID = "ChIJJXxDY1mgs0wRz_hXdQjasWU";
const GOOGLE_MAPS_API_KEY = "AIzaSyAGpHR4gvWgMUxu3kLKFIq2_izh2AhXeuo";

export default class TheWedding extends React.Component {

  state = {
    placeInfo: null
  }

  componentDidMount = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`)
      .then(this.initMap);
  }

  initMap = () => {

    const map = new window.google.maps.Map(this.map, {
      zoom: 16,
      center: { lat: -36.866, lng: 151.196 },
      mapTypeId: "satellite"
    });

    const infoWindow = new window.google.maps.InfoWindow();

    const service = new window.google.maps.places.PlacesService(map);
    const placeId = WHITE_MOUNTAIN_HOTEL_PLACE_ID;

    service.getDetails({ placeId }, (place, status) => {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        console.error("Error loading place", status);
      }

      map.setCenter(place.geometry.location);

      const marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      const [
        number, street, city, subCounty, county, state, country, zip // eslint-disable-line no-unused-vars
      ] = place.address_components;

      infoWindow.setContent(`
        <div class="map-info-window">
          <div class="map-info-window__name">The White Mountain Hotel</div>
          <div class="map-info-window__address">
            <div>${number.short_name} ${street.long_name} </div>
            <div>${city.short_name}, ${state.short_name} ${zip.long_name}</div>
          </div>
          <div>
            <a target="_blank" href="${place.url}">
              View on Google Maps
            </a>
          </div>
        </div>
      `);

      const openInfoWindow = () => infoWindow.open(map, marker);
      openInfoWindow();
      window.google.maps.event.addListener(marker, "click", openInfoWindow);

      this.setState({
        placeInfo: place
      });

    });

  }

  render = () => {

    const { placeInfo } = this.state;

    const weddingDate = moment.parseZone("2018-09-15T15:00:00-04:00");

    return (
      <div className="wedding">
        <div className="wedding__info">

          <h3>Ceremony and Reception</h3>

          <div className="wedding__date">
            <div>
              Saturday, September 15, 2018
              <div className="wedding__from-now">
                ({weddingDate.fromNow()})
              </div>
            </div>
          </div>

          <div className="wedding__hotel">
            <div>
              White Mountain Hotel
              <br/>
              North Conway, NH
            </div>
          </div>

          <p>
            The White Mountain Hotel is located in the heart of the Mt. Washington Valley. The hotel neighbors Echo Lake State Park and sits at the foot of White Horse Ledge with views of Cathedral Ledge and the surrounding mountains.  Weather permitting, our ceremony will be on the lawn, and the cocktail hour and reception will be held under a tent on the hotel grounds. When choosing your footwear, please note that the tent will be set on the grass.
          </p>
        </div>

        <div className="wedding__map">
          <div className="map" ref={el => this.map = el} />
        </div>

        <div className="wedding__map-link">
          <a href={R.prop("url", placeInfo)}
            className="btn btn--external"
            target="_blank"
          >
            White Mountain Hotel on Google maps
            <RightArrow />
          </a>
        </div>
      </div>
    );
  }
}


// String -> Promise
function loadScript(url){

  return new Promise((resolve, reject) => {
    // Adding the script tag to the head as suggested before
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    // script.onreadystatechange = callback;
    script.onload = resolve;
    script.onerror = reject;

    // Fire the loading
    head.appendChild(script);

  });
}
