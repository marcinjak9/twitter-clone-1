import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../../styles/HomePage.css";
import ApiUtils from "./ApiUtils";

export default function TweetForm({ fetchTweets }) {
  const [text, setText] = useState("");

   const tweetInput  = useRef(null)

  const newTweet = (e) => {
    e.preventDefault();
    if (e.target.value !== "" && text !== "") {
      ApiUtils("tweets", "POST", { text }).then((json) => {
        fetchTweets();
        setText("");
        tweetInput.current.value = "";
      });
    } else {
      return alert("scrivi il cazzo di tweet");
    }
  };


  return (
    <div>
      <Card>
        <Form className="form-tweet" onSubmit={newTweet}>
          <Form.Group className="form-text">
            <Form.Control
              ref={tweetInput}
              type="text"
              placeholder="scrivi un tweet"
              required="required"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <div className="form-footer-btn">
            <Button className="btn-tweet" type="submit">
              tweet
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
