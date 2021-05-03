import React,{useState} from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../../styles/HomePage.css"
import ApiUtils from "./ApiUtils";

export default function TweetForm({token}) {

  const [tweets, setTweets] = useState([]);
  const [text, setText] = useState("");
  

  const newTweet = () =>{

  ApiUtils("tweets","POST", {text} )
      .then((json) => console.log(json) );
  }

  return (
    <div>
    <Card>
      <Form className="form-tweet">
        <Form.Group className="form-text">
          <Form.Control type="text" placeholder="scrivi un tweet"  onChange={(e) => setText(e.target.value)}/>
        </Form.Group>
        <div className="form-footer-btn">
        <Button className="btn-tweet" onClick={newTweet}>tweet</Button>
        </div>
      </Form>
      </Card>
    </div>
  );
}
