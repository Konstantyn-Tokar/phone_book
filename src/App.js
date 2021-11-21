import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcNook } from "react-icons/fc";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <FcNook />
            Phonebook
          </Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <Container className="p-3">
        <Row>
          <Col sm={4}>
            <ContactForm />
          </Col>
          <Col sm={8}>
            <Filter />
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
