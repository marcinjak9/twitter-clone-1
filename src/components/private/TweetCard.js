import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import {
  faHeart,
  faComment,
  faRetweet,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiUtils from "./ApiUtils";

export default function TweetCard({ tweetsitem, key }) {
  const { _id, text, created, updated, tags, creator, liked } = tweetsitem;
  const [like, setLike] = useState(0);
  
  useEffect(() => setLike(tweetsitem.like), [tweetsitem]);
  
  const triggerLike = () => {
    // ... qualcosa
    const alreadyLiked = true;
    if(alreadyLiked) {
      unlikeTweet();
    } else {
      likeTweet();
    }
  }

  const likeTweet = () => {
    ApiUtils(`tweets/like/${_id}`, "POST").then((json) => {
      setLike(json.like);
    });
  };

  const unlikeTweet = () => {
    ApiUtils(`tweets/unlike/${_id}`, "POST");
  };

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
          <div>
            <FontAwesomeIcon icon={faHeart} onClick={triggerLike} /> {like}
          </div>
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faRetweet} />
          <FontAwesomeIcon icon={faUpload} />
        </div>
      </Card>
    </div>
  );
}
