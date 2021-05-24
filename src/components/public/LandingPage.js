import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "../../styles/LandingPage.css";
import LoginForm from "./LoginForm";

export default function LandingPage() {
  return (
    <Container className="landing-container">
      <Row className="landing-row">
        <Col md={6} sm={12} className="landing-col">
          <Row>
            <Col className="d-flex justify-content-center ">
              <div className="form-div">
                <LoginForm />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} sm={12} className="landing-col">
          <div className="sfondolanding"></div>
        </Col>
      </Row>
    </Container>
  );
}
