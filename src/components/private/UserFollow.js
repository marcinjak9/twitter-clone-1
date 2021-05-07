import React from "react";
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
}) {
  const userId = localStorage.getItem("userId");
  const alreadyFollowed = followers.find((id) => {
    return id === userId;
  });
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

  return (
    <div className="d-flex flex-row justify-content-between mb-2">
      <div className="d-flex flex-row text-left">
        <Image
          style={{ width: 30, height: 30 }}
          className="mr-2"
          src={avatar}
          roundedCircle
        />
        <div>
          <p>
            {username.split("@")[0]}
            <br />
            followers: {followersCount}
          </p>
        </div>
      </div>

      <Button size="sm" variant="info" onClick={triggerFollow}>
        {alreadyFollowed ? "unfollow" : "Follow"}
      </Button>
    </div>
  );
}
