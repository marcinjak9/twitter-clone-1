import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import TweetList from "./TweetList";
import SearchBar from "./SearchBar";

export default function Home({token}) {
  return (
    <div>
      <Container>
        <Row >
          <Col
            md={2}
            sm={4}
            xs={2}
            className="d-block d-sm-block d-md-none d-xl-none d-lg-none"
          >
            <NavbarMobile />
          </Col>
          <Col md={2} className="d-none d-md-block d-lg-block">
            <NavbarDesktop />
          </Col>
          <Col md={7} sm={8} xs={10}>
            <TweetList token={token}/>
          </Col>
          <Col md={3} className="d-none d-md-block d-lg-block">
            <SearchBar />
            tendenze
          </Col>
        </Row>
      </Container>
    </div>
  );
}
