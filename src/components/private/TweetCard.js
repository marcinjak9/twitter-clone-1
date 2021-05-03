import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import moment from "moment";
import {
  faHeart,
  faComment,
  faRetweet,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TweetCard({ tweetsitem }) {
  const { id, text, created, updated, tags, creator, liked, like } = tweetsitem;
  console.log("tweets items", tweetsitem);

  return (
    <div>
      <Card>
        <div className="tweet-info">
          <div>{creator.name}</div>
          <div>{creator.username}</div>
          <div>{moment(created).fromNow()}</div>
        </div>

        <div> {text} </div>

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
