import React from "react";
import banner from "./banner.png";
import "./banner.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ background: `url(${banner})`, backgroundSize: "cover", backgroundPosition:"center" }}
    >
      <Container>
        <Row>
          <Col>
            <h2>Order Healthy And Fresh Food Any Time</h2>
            <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
            <Link to="/services">
                <Button className="btn" variant="outline-secondary">Our Services</Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
