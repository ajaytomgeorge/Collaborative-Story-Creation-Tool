import {Container } from "react-bootstrap";


const imgPaths ={
  "Music":"music.jpg",
  "Kids":"kids.jpg",
  "Film":"film.jpg",
  "Science":"science.jpg",
"Politics":"politics.jpg",
}
export default function Tags(){
    return (<Container>
        <div className="d-flex mt-4 mb-2 align-items-center">
          <h2>Watchful Tags</h2>
          <a href={`/search/text`} className="ms-auto">
            View More
          </a>
        </div>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mb-2">
          {Object.keys(imgPaths).map((key, index) => (
            <div key = {index}>
              <a
              key={index}
              href={`/search/${key}`}
              className="col text-center category__link"
            >
              <div className="category__img shadow">
                <img
                  src={require(`../assets/${imgPaths[key]}`)}
                  alt="Tag Type"
                />
              </div>
              <div className="pt-1">{key}</div>
            </a>
            </div>
          ))}
        </div>
      </Container>)
}