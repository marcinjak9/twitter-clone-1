import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";

export default function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("https://secret-temple-42258.herokuapp.com/tweets/")
      .then((res) => res.json())
      .then((json) => setTweets(json));
  },[]);


  return (
    <div>
        {tweets.map((tweetsitem, index)=>{
            <TweetCard tweetsitem={tweetsitem} key={index}/>
        })}

    </div>
  );
}
