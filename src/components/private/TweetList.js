import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";

export default function TweetList({token}) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("https://secret-temple-42258.herokuapp.com/tweets/", {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization" : `Bearer ${token}`},
    })
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
