import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";
import ApiUtils from "./ApiUtils";

export default function TweetList({ token }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    /*  fetch("https://secret-temple-42258.herokuapp.com/tweets/", {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization" : `Bearer ${token}`},
    })
      .then((res) => res.json())
      .then((json) => setTweets(json))*/

    ApiUtils("tweets").then((json) => setOrderedTweets(json));
    console.log(tweets);
  }, [token]);


  //CRE
  const setOrderedTweets = (tweets) => {
    const t = tweets.sort(function (a, b) {
      if (new Date(a.created).getTime() < new Date(b.created).getTime()) {
        return 1;
      }
      return -1;
    });
    setTweets(t);
  }

 //DEC NON UTILIZZATO GIUSTO PER RIFERIMENTO
  const setOldestTweets = (tweets) => {
    const t = tweets.sort(function (a, b) {
      if (new Date(a.created).getTime() > new Date(b.created).getTime()) {
        return 1;
      }
      return -1;
    });
    setTweets(t);
  }


  return (
    <div>
      {tweets.map((tweetsitem, index) => (
        <TweetCard tweetsitem={tweetsitem} key={index} />
      ))}
    </div>
  );
}
