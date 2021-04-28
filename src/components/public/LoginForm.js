import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function LoginForm() {

  const [modalShow, setModalShow] = useState(false);

  const registerPres = (e) =>{
    e.preventDefault()
    setModalShow(true)

  }

  return (
    <div>
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
        <div className="btn-container">
          <Button variant="primary" type="submit" as={Link} to="/home">
            Submit
          </Button>

          <Button variant="primary" type="submit" onClick={registerPres}>
            Register
          </Button>
          <RegisterForm show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Form>
    </div>
  );
}
