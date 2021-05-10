import React, { useState, useEffect } from "react";
import ApiUtils from "./ApiUtils";
import TweetCard from "./TweetCard";
import { Card, Button } from "react-bootstrap";

const Profilelist = ({ id, token }) => {
  const [tweets, setTweets] = useState([]);
  const [username, setUsername] = useState("");
  const [followersCount, setFollowersCount] = useState(0);
  const userId = localStorage.getItem("userId");

  const [alreadyFollowed, setAlreadyFollowed] = useState(false);
  useEffect(() => {
    listTweets();
    getProfile();
  }, [token]);

  const getProfile = () => {
    ApiUtils(`users`).then((json) => {
      const profileData = json.find((users) => {
        return users.id === id;
      });
      setUsername(profileData.username);
      setFollowersCount(profileData.followersCount);
      const qualcosa = profileData.followers.find((id) => {
        return id === userId;
      });
      setAlreadyFollowed(qualcosa);
    });
  };

  const listTweets = () => {
    ApiUtils(`tweets/${id}`).then((json) => setOrderedTweets(json));
  };
  const triggerFollow = () => {
    if (alreadyFollowed) {
      unfollow();
    } else {
      follow();
    }
  };

  const follow = () => {
    ApiUtils(`users/follow/${id}`, "POST").then((json) => console.log(json));
  };

  const unfollow = () => {
    ApiUtils(`users/unfollow/${id}`, "POST").then((json) => console.log(json));
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
      <div>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/1600x900/?nature"
          />
          <Card.Body>
            <Card.Title> {username.split("@")[0]} </Card.Title>
            <Card.Text> followers: {followersCount}</Card.Text>
            <Button variant="primary" onClick={triggerFollow}>
              {alreadyFollowed ? "unfollow" : "Follow"}
            </Button>
          </Card.Body>
        </Card>
      </div>
      {tweets.map((tweetsitem) => (
        <TweetCard tweetsitem={tweetsitem} key={tweetsitem.id} />
      ))}
    </div>
  );
};

export default Profilelist;
