import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const FooterComponent = () => {
  return (
    <Container className="bg-dark pt-3" variant="dark" fluid>
      <div className="row">
        <div className="col">
          <div className="text-white">
            <div className="my-3">
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-instagram"></i>{" "}
              </a>
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-facebook"></i>{" "}
              </a>
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-twitter-x"></i>{" "}
              </a>
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-youtube"></i>{" "}
              </a>
            </div>
            <div className="text-white d-flex flex-column">
              <span>Audio And Subs</span>
              <span>Media Cetner</span>
              <span>Privacy</span>
              <span>Contact Us</span>
            </div>

            <div>
              <button className="border border-1 text-white bg-black my-3">
                Service Code
              </button>
            </div>
            <span>© 1997-2019 Netflix, Inc.i-0d00fcda2fdf9c0de</span>
          </div>
        </div>
        <div className="col text-white">
          <div className="text-white d-flex flex-column">
            <span>Audio Description</span>
            <span>Investor Relations</span>
            <span>Legal Notice</span>
          </div>
        </div>
        <div className="col text-white">
          <div className="text-white d-flex flex-column">
            <span>Help Cetner</span>
            <span>Jobs</span>
            <span>Cookie Preferences</span>
          </div>
        </div>
        <div className="col text-white">
          <div className="text-white d-flex flex-column">
            <span>Gift Cards</span>
            <span>Term of Use</span>
            <span>Corporate Information</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterComponent;
