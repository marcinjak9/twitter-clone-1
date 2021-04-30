import React,{useState} from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../../styles/HomePage.css"

export default function TweetForm({token}) {

  const [tweets, setTweets] = useState([]);
  const [text, setText] = useState("");
  

  const newTweet = () =>{
    fetch("https://secret-temple-42258.herokuapp.com/tweets/", {
      method: "POST",
      body: {text : text},
      headers: { "Content-Type": "application/json", "Authorization" : `Bearer ${token}`},
    })
      .then((res) => res.json())
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
