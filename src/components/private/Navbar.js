import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  faHome,
  faSearch,
  faBell,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from "./Settings";

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  const openSettings = (e) => {
    e.preventDefault();
    setModalShow(true);
  };
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column navbar">
        <Nav.Link href="/home" className="font-weight-bold" eventKey="link-1">
          <FontAwesomeIcon icon={faHome} />
          <p className="d-none d-sm-none d-md-block">Home</p>
        </Nav.Link>
        <Nav.Link className="font-weight-bold" eventKey="link-2">
          <FontAwesomeIcon icon={faSearch} />
          <p className="d-none d-sm-none d-md-block">Esplora</p>
        </Nav.Link>
        <Nav.Link className="font-weight-bold" eventKey="link-2">
          <FontAwesomeIcon icon={faBell} />
          <p className="d-none d-sm-none d-md-block">Notifiche</p>
        </Nav.Link>
        <Nav.Link
          className="font-weight-bold"
          eventKey="link-2"
          onClick={openSettings}
        >
          <FontAwesomeIcon icon={faCogs} />
          <p className="d-none d-sm-none d-md-block">Impostazioni</p>
        </Nav.Link>
      </Nav>
      <Settings show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
