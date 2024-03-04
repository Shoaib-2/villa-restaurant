import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";
// Images of the gallery
const galleryImages = [
  images.arloGallery,
  images.bgFoodGallery,
  images.burgerGallery,
  images.dogGallery,
  images.peopleGallery,
];

const Gallery = () => {
  // For scroll behaviour of the arrows left and right
  const scrollref = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollref;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  //  State for showing specific image in the lightbox
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Best of our PUB!</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Aye, divvent ya just love them memories made wi' ya bairns and ya
          loved yins? It's like a proper canny feeling, like. Reckon there's
          nowt better than spending quality time wi' the fam, making memories
          that'll stick like glue in ya heart.
        </p>
        <button type="button" className="custom__button">
          <a href="https://www.instagram.com/punchbowlncl">View More</a>
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollref}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
                <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
