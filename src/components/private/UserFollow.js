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
}) {
  const userId = localStorage.getItem("userId");

  const follow = () => {
    ApiUtils(`users/follow/${id}`, "POST").then((json) => console.log(json));
  };

  return (
    <div className="d-flex flex-row justify-content-between mb-2">
      <div className="d-flex flex-row text-left">
        <Image className="mr-2" src={avatar} roundedCircle />
        {username.split("@")[0]}
      </div>

      <Button size="sm" variant="info" onClick={follow}>
        Follow
      </Button>
    </div>
  );
}
