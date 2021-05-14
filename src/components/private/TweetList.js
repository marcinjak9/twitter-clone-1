import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";
import ApiUtils from "./ApiUtils";
import TweetForm from "./TweetForm";

export default function TweetList({ token, tweetList, fetchTweets}) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setOrderedTweets(tweetList);
  }, [token, tweetList]);

  const setOrderedTweets = (tweets, direction = 1) => {
    const t = tweets.sort((a, b) => {
      return new Date(a.created).getTime() < new Date(b.created).getTime()
        ? direction
        : -direction;
    });
    setTweets(t);
  };

  const listUpdate = () => {
    ApiUtils("tweets/feed").then((json) => setOrderedTweets(json));
  };

  return (
    <div>
      <TweetForm listUpdate={listUpdate} fetchTweets={fetchTweets}/>

      {tweets.map((tweetsitem) => (
        <TweetCard tweetsitem={tweetsitem} key={tweetsitem.id} />
      ))}
    </div>
  );
}
