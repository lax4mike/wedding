import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe";

const photos = [
  {
    src: "img/gallery/large/antelope.jpg",
    thumbnail: "img/gallery/thumb/antelope.jpg",
    w: 676,
    h: 1200,
    title: "Antelope Canyon, AZ"
  },
  {
    src: "img/gallery/large/cadilac.jpg",
    thumbnail: "img/gallery/thumb/cadilac.jpg",
    w: 1200,
    h: 900,
    title: "Top of Cadilac Mt. for sunrise."
  },
  {
    src: "img/gallery/large/florence.jpg",
    thumbnail: "img/gallery/thumb/florence.jpg",
    w: 676,
    h: 1200,
    title: "Florence, Italy"
  },
  {
    src: "img/gallery/large/garfield.jpg",
    thumbnail: "img/gallery/thumb/garfield.jpg",
    w: 1200,
    h: 675,
    title: "Hiking Mt. Garfield, NH."
  },
  {
    src: "img/gallery/large/helicopter.jpg",
    thumbnail: "img/gallery/thumb/helicopter.jpg",
    w: 1200,
    h: 900,
    title: "Helicopter ride to go back-country skiing in British Columbia."
  },
  {
    src: "img/gallery/large/hueco.jpg",
    thumbnail: "img/gallery/thumb/hueco.jpg",
    w: 960,
    h: 720,
    title: "Hueco, 2012"
  },
  {
    src: "img/gallery/large/katahdin.jpg",
    thumbnail: "img/gallery/thumb/katahdin.jpg",
    w: 1200,
    h: 900,
    title: "Summit of Mt. Katahdin."
  },
  {
    src: "img/gallery/large/sassolungo.jpg",
    thumbnail: "img/gallery/thumb/sassolungo.jpg",
    w: 1200,
    h: 900,
    title: "Skiing in Sassolungo, Italy."
  },
  {
    src: "img/gallery/large/snow-beard.jpg",
    thumbnail: "img/gallery/thumb/snow-beard.jpg",
    w: 1200,
    h: 675,
    title: "Skiing in Bretton woods, NH."
  },
  {
    src: "img/gallery/large/whistler.jpg",
    thumbnail: "img/gallery/thumb/whistler.jpg",
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
  counterEl: false,
  // showHideOpacity: true,

  getThumbBoundsFn: function(index, a) {

    const THUMB_SIZE = 180;

    // find thumbnail element
    const thumbnail = document.querySelectorAll(".pswp-thumbnail")[index];
    const { w, h } = photos[index];
    const ratio = w/h;
    const isPortrait = ratio < 1;

    // get window scroll Y
    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
    // optionally get horizontal scroll

    // get position of element relative to viewport
    const rect = thumbnail.getBoundingClientRect();

    const left = rect.left;
    const top = rect.top + pageYScroll;
    const { width, height } = rect; // width should always be THUMB_SIZE

    const thumbHeight = (isPortrait) ? width / ratio : THUMB_SIZE;
    const thumbWidth = (isPortrait) ? THUMB_SIZE : height * ratio;

    return {
      x: (isPortrait) ? left : left - ((thumbWidth - THUMB_SIZE) / 2),
      y: (isPortrait) ? top - ((thumbHeight - THUMB_SIZE) / 2) : top,
      w: thumbWidth
    };

  }

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
