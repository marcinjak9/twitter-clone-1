import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../../styles/HomePage.css"

export default function TweetForm() {
  return (
    <div>
    <Card>
      <Form className="form-tweet">
        <Form.Group className="form-text">
          <Form.Control type="email" placeholder="scrivi un tweet" />
        </Form.Group>
        <div className="form-footer-btn">
        <Button className="btn-tweet">tweet</Button>
        </div>
      </Form>
      </Card>
    </div>
  );
}
