import {Container } from "react-bootstrap";
export default function Tags(){
    return (<Container>
        <div class="d-flex mb-2 align-items-center">
          <h2>Watchful Tags</h2>
          <a href="/explore-latest" class="ms-auto">
            View More
          </a>
        </div>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mb-2">
          {[...Array(5)].map((elementInArray, index) => (
            <a
              key={index}
              href="/home"
              className="col text-center category__link"
            >
              <div className="category__img shadow">
                <img
                  src={require("../assets/bigdata.jpg")}
                  alt="Tag Type"
                  loading="lazy"
                />
              </div>
              <div className="pt-1">Science</div>
            </a>
          ))}
        </div>
      </Container>)
}