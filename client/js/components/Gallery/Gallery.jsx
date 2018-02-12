import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";

const photos = [
  {
    src: "img/gallery/antelope.jpg",
    thumbnail: "img/gallery/antelope.jpg",
    w: 676,
    h: 1200,
    title: "Antelope Canyon, AZ"
  },
  {
    src: "img/gallery/cadilac.jpg",
    thumbnail: "img/gallery/cadilac.jpg",
    w: 1200,
    h: 900,
    title: "Top of Cadilac Mt. for sunrise."
  },
  {
    src: "img/gallery/florence.jpg",
    thumbnail: "img/gallery/florence.jpg",
    w: 676,
    h: 1200,
    title: "Florence, Italy"
  },
  {
    src: "img/gallery/garfield.jpg",
    thumbnail: "img/gallery/garfield.jpg",
    w: 1200,
    h: 675,
    title: "Hiking Mt. Garfield, NH."
  },
  {
    src: "img/gallery/helicopter.jpg",
    thumbnail: "img/gallery/helicopter.jpg",
    w: 1200,
    h: 900,
    title: "Helicopter ride to go back-country skiing in British Columbia."
  },
  {
    src: "img/gallery/hueco.jpg",
    thumbnail: "img/gallery/hueco.jpg",
    w: 960,
    h: 720,
    title: "Hueco, 2012"
  },
  {
    src: "img/gallery/katahdin.jpg",
    thumbnail: "img/gallery/katahdin.jpg",
    w: 1200,
    h: 900,
    title: "Summit of Mt. Katahdin."
  },
  {
    src: "img/gallery/sassolungo.jpg",
    thumbnail: "img/gallery/sassolungo.jpg",
    w: 1200,
    h: 900,
    title: "Skiing in Sassolungo, Italy."
  },
  {
    src: "img/gallery/snow-beard.jpg",
    thumbnail: "img/gallery/snow-beard.jpg",
    w: 1200,
    h: 675,
    title: "Skiing in Bretton woods, NH."
  },
  {
    src: "img/gallery/whistler.jpg",
    thumbnail: "img/gallery/whistler.jpg",
    w: 1200,
    h: 900,
    title: "Whistler, BC"
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
};

export default class Gallery extends React.Component {

  getThumbnailContent = (item) => {

    const dimensions = (item.w > item.h)
      ? { width: "100%", height: "auto" }
      : { width: "auto", height: "100%" };

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
