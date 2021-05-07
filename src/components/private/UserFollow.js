import React from "react";
import {Button, Image } from "react-bootstrap";

export default function UserFollow({
  username,
  followingCount,
  followersCount,
  id,
  avatar,
  following,
}) {
  return (
    <div>
      {username}

      <Image src={avatar} roundedCircle />
      <Button variant="info">Following</Button>
    </div>
  );
}
