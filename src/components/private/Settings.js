import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import ApiUtils from "./ApiUtils";

const Settings = (props) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [distractionMode, setDistractionMode] = useState(false);

  useEffect(() => {
    getElements();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    ApiUtils("users/profile", "PUT", { name, bio, avatar }).then((json) => {});
    console.log(distractionMode);
    localStorage.setItem("distractionMode", true);
  };
  const getElements = () => {
    ApiUtils("users/profile", "GET").then((json) => {
      setName(json.name);
      setBio(json.bio);
      setAvatar(json.avatar);
      const checkMode = localStorage.getItem("distractionMode");
      console.log(checkMode);
      setDistractionMode(checkMode === "" ? false : checkMode);
    });
  };
  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modifica le tue info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Form onSubmit={onSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicBio">
                    <Form.Label>Write something about you</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Write something about you"
                      onChange={(e) => setBio(e.target.value)}
                      value={bio}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicAvatar">
                    <Form.Label>Change your avatar</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Change your avatar"
                      onChange={(e) => setAvatar(e.target.value)}
                      value={avatar}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicFlag">
                    <Form.Label>Modalità distraction free</Form.Label>
                    <Form.Check
                      onChange={(e) => setDistractionMode(e.target.checked)}
                      checked={distractionMode}
                      type="checkbox"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Settings;
