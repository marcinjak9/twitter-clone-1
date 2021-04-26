import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import {
  faHeart,
  faComment,
  faRetweet,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TweetCard() {
  return (
    <div>
      <Card>
        <div className="tweet-info">
          <div>nome utente</div>
          <div>tag utente</div>
          <div>orario</div>
        </div>

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          neque.
        </div>
        <div className="tweet-icon-container">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faRetweet} />
          <FontAwesomeIcon icon={faUpload} />
        </div>
      </Card>
    </div>
  );
}
