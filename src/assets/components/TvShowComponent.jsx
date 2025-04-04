import { Container, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const TvShowComponent = () => {
  return (
    <Container
      fluid
      className="d-flex align-item-center justify-content-between bg-dark"
      variant="dark"
    >
      <div className="d-flex gap-4 align-items-center mx-3">
        <h1 className="text-white">TV Shows</h1>
        <Dropdown>
          <Dropdown.Toggle
            variant="black"
            className="border border-1 text-white"
            id="dropdown-basic"
          >
            Generies
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Anime</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* piccolo scam per non usare i bottoni */}
      <div className="d-flex align-items-center  mx-2">
        <a href="#">
          <i className="bi bi-filter-left text-white border border-1"></i>
        </a>
        <a href="#">
          <i className="bi bi-grid-fill text-white border border-1"></i>
        </a>
      </div>
    </Container>
  );
};

export default TvShowComponent;
