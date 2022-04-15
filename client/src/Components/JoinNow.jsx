import { Container } from "react-bootstrap"
export default function JoinNow(){
    return (
        <Container>
        <section className="px-4 py-5 my-5 text-center ml-5">
          <img
            src={require("../assets/reading_all.png")}
            className="d-block mx-auto mb-4 img-fluid"
            alt="Publish your Story for FREE today"
            width="566"
            height="208"
            loading="lazy"
          />
          <h1 className="display-5 fw-bold">Publish your story for FREE today</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Let the world come to you
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/publish" className="btn btn-primary btn-dark btn-lg">
                Submit Story
              </a>
            </div>
          </div>
        </section>
      </Container>
    )
}