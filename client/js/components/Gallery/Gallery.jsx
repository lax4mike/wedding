import React from "react";
import R from "ramda";
import { PhotoSwipeGallery } from "react-photoswipe";

const photos = [
  {
    filename: "2009-cb-1200x900.jpg",
    title: "Skiing in Crested Butte 2009"
  },
  {
    filename: "2009-eaglet-900x1200.jpg",
    title: "Climbing the Eaglet, NH 2009"
  },
  {
    filename: "2009-tuckermans-1200x900.jpg",
    title: "Skiing Tuckermans, NH 2009"
  },
  {
    filename: "2009-ugly-sweater-1200x800.jpg",
    title: "Ugly sweater party 2009"
  },
  {
    filename: "2010-grand-canyon-1200x800.jpg",
    title: "Hiking to the bottom of the Grand Canyon 2010"
  },
  {
    filename: "2011-yip-yip-1200x900.jpg",
    title: "Homemade halloween costumes 2011"
  },
  {
    filename: "2012-acadiarock-900x1200.jpg",
    title: "Hiking in Acadia National Park 2012"
  },
  {
    filename: "2012-armadillo-1200x900.jpg",
    title: "Climbing the Armadillo on Mt. Katahdin 2012"
  },
  {
    filename: "2012-katahdin-1200x900.jpg",
    title: "Summit of Mt. Katahdin 2012"
  },
  {
    filename: "2012-hueco-960x720.jpg",
    title: "Bouldering in Hueco 2012"
  },
  {
    filename: "2012-sandcastle-1200x900.jpg",
    title: "Cape Cod with cousin Charlie 2012"
  },
  {
    filename: "2012-whistler-1200x900.jpg",
    title: "Skiing in Whistler, BC 2012"
  },
  {
    filename: "2013-cadilac-1200x900.jpg",
    title: "Top of Cadilac Mt. in Acadia National Park for sunrise 2013"
  },
  {
    filename: "2014-acadia-1200x264.jpg",
    title: "Climbing in Acadia National Park 2014"
  },
  {
    filename: "2014-florence-676x1200.jpg",
    title: "Florence, Italy 2014"
  },
  {
    filename: "2014-herring-1200x435.jpg",
    title: "Sailing on Herring Pond 2014"
  },
  {
    filename: "2014-sassolungo-1200x900.jpg",
    title: "Skiing in the Dolomites, Italy with Sassolungo in the background 2014"
  },
  {
    filename: "2014-tortola-1200x900.jpg",
    title: "Scuba Diving in Tortola 2014"
  },
  {
    filename: "2015-snow-beard-1200x675.jpg",
    title: "Skiing in Bretton Woods, NH 2015"
  },
  {
    filename: "2016-antelope-676x1200.jpg",
    title: "Antelope Canyon, AZ on a Southwest road trip 2016"
  },
  {
    filename: "2016-garfield-1200x675.jpg",
    title: "Hiking Mt. Garfield, NH 2016"
  },
  {
    filename: "2016-helicopter-1200x900.jpg",
    title: "Helicopter ride to go back-country skiing in British Columbia 2016"
  },
  {
    filename: "2016-sol-1200x900.jpg",
    title: "Backcountry Skiing on Sol Mountain, BC 2016"
  },
  {
    filename: "2016-sunset-1200x900.jpg",
    title: "Cape Cod 2016"
  },
  {
    filename: "2016-terns-tail-1200x676.jpg",
    title: "Sailing the Tern's tail on Cape Cod bay 2016"
  }
];


const photoswipeItems = R.map(
  ({ filename, title }) => {

    const [ w, h ] = R.compose(
      R.map(parseInt),
      R.slice(1, 3),
      R.match(/-(\d+)x(\d+)\.\w+$/)
    )(filename);

    const thumb = R.replace(/-(\d+)x(\d+)/, "", filename);

    return {
      src: `img/gallery/large/${filename}`,
      thumbnail: `img/gallery/thumb/${thumb}`,
      w, h, title
    };
  }
)(photos);

// http://photoswipe.com/documentation/options.html
const options = {
  history: false,

  // ui options
  fullscreenEl: false,
  zoomEl: false,
  shareEl: false,
  counterEl: true
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
      <div className="gallery">
        <PhotoSwipeGallery
          items={photoswipeItems}
          options={options}
          thumbnailContent={this.getThumbnailContent}
        />
      </div>

    );
  }
}
