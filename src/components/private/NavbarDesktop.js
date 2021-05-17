import React from "react";
import { Nav, Row, Col, Form, Button } from "react-bootstrap";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarDesktop() {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column navbar">
        {/* <Nav.Link className="font-weight-bold " href="/home">
          <FontAwesomeIcon icon={faTwitter} />
        </Nav.Link> */}

        <Nav.Link className="font-weight-bold" eventKey="link-1">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </Nav.Link>
        <Nav.Link className="font-weight-bold" eventKey="link-2">
          <FontAwesomeIcon icon={faSearch} />
          <p>Esplora</p>
        </Nav.Link>
        <Nav.Link className="font-weight-bold" eventKey="link-2">
          <FontAwesomeIcon icon={faBell} />
          <p>Notifiche</p>
        </Nav.Link>
      </Nav>
    </div>
  );
}
