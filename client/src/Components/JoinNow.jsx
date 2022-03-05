import { Container } from "react-bootstrap"
export default function JoinNow(){
    return (
        <Container>
        <section class="px-4 py-5 my-5 text-center ml-5">
          <img
            src={require("../assets/reading_all.png")}
            class="d-block mx-auto mb-4 img-fluid"
            alt="Publish your recipe for FREE today"
            width="566"
            height="208"
            loading="lazy"
          />
          <h1 class="display-5 fw-bold">Publish your story for FREE today</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Let the world come to you
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/submit-recipe" class="btn btn-primary btn-dark btn-lg">
                Submit Story
              </a>
            </div>
          </div>
        </section>
      </Container>
    )
}