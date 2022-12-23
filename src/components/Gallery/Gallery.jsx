import "./Gallery.scss";
import { galleryImgs } from "./GalleryData";

const Gallery = () => {
  return (
    <section className="gallery">
      {galleryImgs.map((img) => {
        return (
          <figure key={crypto.randomUUID()} className={img.figureClassName}>
            <img src={img.src} alt={img.alt} className="gallery__img" />
          </figure>
        );
      })}
    </section>
  );
};

export default Gallery;
