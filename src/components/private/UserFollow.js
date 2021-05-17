import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import ApiUtils from "./ApiUtils";

export default function UserFollow({
  username,
  followingCount,
  followersCount,
  id,
  avatar,
  following,
  followers,
  fetchUser,
}) {
  const [alreadyFollowed, setAlreadyFollowed] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const found = followers.find((id) => {
      return id === userId;
    });
    setAlreadyFollowed(found);
  }, [id]);

  const triggerFollow = () => {
    if (alreadyFollowed) {
      unfollow();
    } else {
      follow();
    }
  };

  const follow = () => {
    ApiUtils(`users/follow/${id}`, "POST").then((json) => {
      setAlreadyFollowed(true);
      fetchUser();
    });
  };

  const unfollow = () => {
    ApiUtils(`users/unfollow/${id}`, "POST").then((json) => {
      setAlreadyFollowed(false);
      fetchUser();
    });
  };

  return (
    <div className="d-flex flex-row justify-content-between mb-4 align-items-center">
      <div className="d-flex flex-row text-left align-items-center">
        <Image
          style={{ width: 30, height: 30 }}
          className="mr-4"
          src={avatar}
          roundedCircle
        />
        <div>
          <p className="mb-0">
            {username.split("@")[0]}
            <br />
            followers: {followersCount}
          </p>
        </div>
      </div>
      <div>
        <Button
          className="follow-button"
          size="sm"
          variant="outline-info"
          onClick={triggerFollow}
        >
          {alreadyFollowed ? "unfollow" : "Follow"}
        </Button>
      </div>
    </div>
  );
}
