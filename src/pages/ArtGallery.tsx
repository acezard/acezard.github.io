import { artworks } from "../data/artworks";
import "./ArtGallery.css";

export function ArtGallery() {
  return (
    <section>
      <div className="art-grid">
        {artworks.map((art) => (
          <article className="art-card" key={art.id}>
            <button type="button">
              <img
                className="art-card__image"
                src={art.thumb}
                alt={art.alt}
                loading="lazy"
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}