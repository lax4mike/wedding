import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";

const photos = [
  {
    src: "img/gallery/large/cadilac.jpg",
    thumbnail: "img/gallery/thumb/cadilac.jpg",
    w: 1200,
    h: 900,
    title: "Top of Cadilac Mt. in Acadia National Park for sunrise 2013"
  },
  {
    src: "img/gallery/large/antelope.jpg",
    thumbnail: "img/gallery/thumb/antelope.jpg",
    w: 676,
    h: 1200,
    title: "Antelope Canyon, AZ on a Southwest road trip 2016"
  },
  {
    src: "img/gallery/large/garfield.jpg",
    thumbnail: "img/gallery/thumb/garfield.jpg",
    w: 1200,
    h: 675,
    title: "Hiking Mt. Garfield, NH 2016"
  },
  {
    src: "img/gallery/large/helicopter.jpg",
    thumbnail: "img/gallery/thumb/helicopter.jpg",
    w: 1200,
    h: 900,
    title: "Helicopter ride to go back-country skiing in British Columbia 2016"
  },
  {
    src: "img/gallery/large/hueco.jpg",
    thumbnail: "img/gallery/thumb/hueco.jpg",
    w: 960,
    h: 720,
    title: "Bouldering in Hueco 2012"
  },
  {
    src: "img/gallery/large/katahdin.jpg",
    thumbnail: "img/gallery/thumb/katahdin.jpg",
    w: 1200,
    h: 900,
    title: "Summit of Mt. Katahdin 2012"
  },
  {
    src: "img/gallery/large/florence.jpg",
    thumbnail: "img/gallery/thumb/florence.jpg",
    w: 676,
    h: 1200,
    title: "Florence, Italy 2014"
  },
  {
    src: "img/gallery/large/sassolungo.jpg",
    thumbnail: "img/gallery/thumb/sassolungo.jpg",
    w: 1200,
    h: 900,
    title: "Skiing in Sassolungo, Italy 2014"
  },
  {
    src: "img/gallery/large/snow-beard.jpg",
    thumbnail: "img/gallery/thumb/snow-beard.jpg",
    w: 1200,
    h: 675,
    title: "Skiing in Bretton woods, NH 2015"
  },
  {
    src: "img/gallery/large/sunset.jpg",
    thumbnail: "img/gallery/thumb/sunset.jpg",
    w: 1200,
    h: 900,
    title: "Cape Cod 2016"
  },
  {
    src: "img/gallery/large/whistler.jpg",
    thumbnail: "img/gallery/thumb/whistler.jpg",
    w: 1200,
    h: 900,
    title: "Skiing in Whistler, BC 2012"
  },

  {
    src: "img/gallery/large/herring.jpg",
    thumbnail: "img/gallery/thumb/herring.jpg",
    w: 1200,
    h: 435,
    title: "Sailing on Herring Pond 2014"
  },
  {
    src: "img/gallery/large/cozumel.jpg",
    thumbnail: "img/gallery/thumb/cozumel.jpg",
    w: 1200,
    h: 676,
    title: "Scuba diving in Cozumel 2014"
  },
  {
    src: "img/gallery/large/acadia.jpg",
    thumbnail: "img/gallery/thumb/acadia.jpg",
    w: 1200,
    h: 264,
    title: "Climbing in Acadia National Park 2014"
  },
  {
    src: "img/gallery/large/terns-tail.jpg",
    thumbnail: "img/gallery/thumb/terns-tail.jpg",
    w: 1200,
    h: 676,
    title: "Sailing the Tern's tail on Cape Cod bay 2016"
  }
];

// http://photoswipe.com/documentation/options.html
const options = {
  history: false,

  // ui options
  fullscreenEl: false,
  zoomEl: false,
  shareEl: false,
  counterEl: false
  // showHideOpacity: true,
};



export default class Gallery extends React.Component {

  getThumbnailContent = (item) => {

    // const dimensions = (item.w > item.h)
    //   ? { width: "100%", height: "auto" }
    //   : { width: "auto", height: "100%" };

    const dimensions = { width: "100%", height: "auto" };

    return (
      <img src={item.thumbnail} alt={item.title} {...dimensions} />
    );
  }

  render = () => {
    return (
      <PhotoSwipeGallery
        items={photos}
        options={options}
        thumbnailContent={this.getThumbnailContent}
      />

    );
  }
}
