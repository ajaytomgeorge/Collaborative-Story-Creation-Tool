import { Container } from "react-bootstrap";

const imgPaths ={
  "The Arrival":"trending_starship.jpg",
  "Motorcycle Diaries":"trending _motorcycle.jpg",
  "House in Woods":"trending_house.jpg",
  "GOT":"tags.jpg",
  "Life of Sara":"trending_latern.jpg",
}

const imgId = {
  "The Arrival":"6258c4d5bb9735b8723bdf77",
  "Motorcycle Diaries":"6258d0adbb9735b8723bdf86",
  "House in Woods":"6258d348bb9735b8723bdf8f",
  "GOT":"6258d444bb9735b8723bdf9a",
  "Life of Sara":"6258d574bb9735b8723bdfa5",
}

export default function Trending() {
  return (
    <Container className="mt-4">
      <div className="d-flex mb-2 align-items-center">
        <h2>Trending Stories</h2>
        <a href="/search/love" className="ms-auto">
          View More
        </a>
      </div>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {Object.keys(imgPaths).map((key, index) => (
          <div key = {index}>
            <a
              href={`/read/${imgId[key]}`}
              className="col text-center category__link"
            >
              <div className="category__img category__img--large shadow">
                <img
                  src={require(`../assets/${imgPaths[key]}`)}
                  alt="Tags"
                  loading="lazy"
                />
              </div>
              <div className="pt-1">{key}</div>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}
