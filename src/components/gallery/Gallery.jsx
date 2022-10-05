import React from "react";
import "./Gallery.scss";
import galleryData from "../../data/gallery-data.json";

function Gallery() {
  const gallery = galleryData.map((gallery) => {
    return (
      <div key={gallery.id} className="grid-item">
        <div className="overlay-grid"></div>
        <h3>{gallery.title}</h3>
        <a href={gallery.link}>
          <picture>
            <source media="(max-width: 575px)" srcSet={gallery.mobile} />
            <img src={gallery.desktop} alt={gallery.alt} />
          </picture>
        </a>
      </div>
    );
  });

  return (
    <section id="gallery">
      <div className="Container">
        <div className="header-gallery">
          <h2 className="title-gallery">Our creations</h2>
          <button className="btn-gallery-top">See all</button>
        </div>
        <div className="grid-gallery">{gallery}</div>
        <div className="bottom-gallery">
          <button className="btn-gallery-botton">See all</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
