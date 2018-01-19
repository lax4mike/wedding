import React from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyAGpHR4gvWgMUxu3kLKFIq2_izh2AhXeuo"

// https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
const WHITE_MOUNTAIN_HOTEL_PLACE_ID = "ChIJJXxDY1mgs0wRz_hXdQjasWU";

export default class Map extends React.Component {

  componentDidMount = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`)
      .then(this.initMap);
  }

  initMap = () => {

    const map = new window.google.maps.Map(this.map, {
      zoom: 16,
      // zoom: 18,
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

    });

  }

  render = (props) => {
    return (
      <div className="map"
        ref={el => this.map = el}
      />
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
