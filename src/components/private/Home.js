import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col
            md={2}
            className="d-block d-sm-block d-md-none d-xl-none d-lg-none"
          >
            menu mobile
          </Col>
          <Col md={2} className="d-none d-md-block d-lg-none">
            menu desktop
          </Col>
          <Col md={7}>centro</Col>
          <Col md={3}>tendenze</Col>
        </Row>
      </Container>
    </div>
  );
}
