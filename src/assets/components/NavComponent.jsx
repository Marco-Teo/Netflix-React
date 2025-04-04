import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavComponent = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#">
          <Image src="/netflix_logo.png" alt="Netflix Logo" width="100" />
        </Navbar.Brand>

        {/* MENU */}
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>

        {/* ICONS & USER */}
        <Nav className="align-items-center">
          <Nav.Link href="#">
            <i className="bi bi-search"></i>
          </Nav.Link>
          <Nav.Link href="#">KIDS</Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-bell"></i>
          </Nav.Link>
          <NavDropdown title="🔽" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
