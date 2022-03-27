import {Container} from 'react-bootstrap';

export default function Trending (){
    return (<Container className="mt-4">
    <div class="d-flex mb-2 align-items-center">
      <h2>Trending Stories</h2>
      <a href="/search" class="ms-auto">
        View More
      </a>
    </div>
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      {[...Array(5)].map((elementInArray, index) => (
        <a
          href="/recipe/<%= recipe._id %>"
          class="col text-center category__link"
        >
          <div class="category__img category__img--large shadow">
            <img
              src={require("../assets/tags.jpg")}
              alt="Tags"
              loading="lazy"
            />
          </div>
          <div class="pt-1">Name</div>
        </a>
      ))}
    </div>
  </Container>)
}