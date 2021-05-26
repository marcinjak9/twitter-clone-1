import React, { useState, useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
    <Row className="d-flex flex-row justify-content-between mb-4 align-items-center">
      <Col>
        <Row
          xs={12}
          sm={12}
          md={10}
          className="d-flex flex-row text-left align-items-center"
        >
          <Col xs={2} md={3}>
            <Image
              style={{ width: 30, height: 30 }}
              className="mr-4"
              src={avatar}
              roundedCircle
            />
          </Col>

          <Col xs={10} md={9}>
            <Link to={`/profile/${id}`}>
            <p className="nome-user mb-0">
              {username.split("@")[0]}
            </p>
            </Link>
            <p>followers: {followersCount}</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row md={12}>
          <Col xs={12} md={12} sm={12}>
            <Button
              className="follow-button"
              size="sm"
              variant="outline-info"
              onClick={triggerFollow}
            >
              {alreadyFollowed ? "unfollow" : "Follow"}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
