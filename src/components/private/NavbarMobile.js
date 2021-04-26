import React from "react";
import { Nav, Row, Col, Form, Button } from "react-bootstrap";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome, faSearch, faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarMobile() {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">
            <FontAwesomeIcon icon={faTwitter} />
        </Nav.Link>
        <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faHome}/>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
        <FontAwesomeIcon icon={faSearch}/>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
        <FontAwesomeIcon icon={faBell}/>
        </Nav.Link>
      </Nav>
    </div>
  );
}
