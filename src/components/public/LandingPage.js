import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <Container className="landing-container">
      <Row className="landing-row">
        <Col md={6} sm={12} className="landing-col">
          <Row>
            <Col className="d-flex justify-content-center ">
              <div className="form-div">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
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
