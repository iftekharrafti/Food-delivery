import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const {user, logOut, signInUsignGoogle} = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Calivardata</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/myOrders">MyOrders</Nav.Link>
            <Nav.Link as={Link} to="/allOrders">Manage All Orders</Nav.Link>
            <Nav.Link as={Link} to="/newOrders">Add a new orders</Nav.Link>
            <p>{user.displayName}</p>
            {
              user.email ? 
              <Link to="">
                <Button onClick={logOut} className="btn" variant="outline-info">Logout</Button>
            </Link>
              :
              <div>
                <Link to="/login">
                <Button className="btn" variant="outline-info">Login</Button>
            </Link>
              </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
