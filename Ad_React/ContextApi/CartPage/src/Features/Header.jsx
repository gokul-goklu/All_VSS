import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {" "}
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <a href="/">SearchProduct</a>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              style={{ width: 500 }}
              placeholder="Search products"
              className="m-auto"
            />
          </Navbar.Text>
          <nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: "400px" }}>
                <span style={{ padding: "20px" }}>Empty cart</span>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
