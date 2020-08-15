import React from "react";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
  }
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placeorgi.com/300/300"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return {
      photos,
    };
  }
  handelindexclick = (event) => {
    this({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handelindexclick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
