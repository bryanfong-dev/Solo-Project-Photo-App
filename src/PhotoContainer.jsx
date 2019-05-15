import React from "react";
import Photo from './Photo'


const photosArray = [
  "http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg",
  "http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg",
  "http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg",
  "http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg",
  "http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg",
  "http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg",
  "http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg",
  "http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg",
  "http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg",
]

class PhotoContainer extends React.Component {
  render() {
    const Photos = [];
    photosArray.forEach(link => {
      Photos.push(<Photo link={link} />);
    })

    return (
      <div id="photoContainer">
        {Photos}
      </div>
    )
  }
}

export default PhotoContainer;