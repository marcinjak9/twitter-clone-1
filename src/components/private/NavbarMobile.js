import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faSearch,
  faBell,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from "./Settings";

export default function NavbarMobile() {
  const [modalShow, setModalShow] = useState(false);
  const openSettings = (e) => {
    e.preventDefault();
    setModalShow(true);
  };
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">
          <FontAwesomeIcon icon={faTwitter} />
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <FontAwesomeIcon icon={faHome} />
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <FontAwesomeIcon icon={faSearch} />
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <FontAwesomeIcon icon={faBell} />
        </Nav.Link>
        <Nav.Link onClick={openSettings}>
          <FontAwesomeIcon icon={faCogs} />
          <p>Impostazioni</p>
        </Nav.Link>
      </Nav>
      <Settings show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
