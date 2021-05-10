import React, { useState, useEffect } from "react";
import ApiUtils from "./ApiUtils";
import TweetCard from "./TweetCard";

const Profilelist = ({ id, token }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    listTweets();
  }, [token]);

  const listTweets = () => {
    ApiUtils(`tweets/${id}`).then((json) => setOrderedTweets(json));
  };

  const setOrderedTweets = (tweets, direction = 1) => {
    const t = tweets.sort((a, b) => {
      return new Date(a.created).getTime() < new Date(b.created).getTime()
        ? direction
        : -direction;
    });
    setTweets(t);
  };
  return (
    <div>
      {tweets.map((tweetsitem) => (
        <TweetCard tweetsitem={tweetsitem} key={tweetsitem.id} />
      ))}
    </div>
  );
};

export default Profilelist;
