import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import UserList from "./UserList";
import { useParams } from "react-router-dom";
import ProfileList from "./ProfileList";
import SearchBar from "./SearchBar";
import TrendList from "./TrendList";
import ApiUtils from "./ApiUtils";

const Profile = () => {
  const [tweetList, setTweetList] = useState([]);
  const { q } = useParams();

  const fetchTweets = () => {
    if (q) {
      ApiUtils(`tweets/tag/${q}`).then((json) => {
        setTweetList(json);
      });
    } else {
      ApiUtils("tweets/feed").then((json) => {
        setTweetList(json);
      });
    }
  };
  
  useEffect(() => {
    fetchTweets();
  }, [q]);

  const { id } = useParams();
  return (
    <div>
      <Container>
        <Row>
          <Col md={2} sm={1} xs={2}>
            <Navbar />
          </Col>
          <Col md={6} sm={8} xs={10}>
            <ProfileList id={id} />
          </Col>
          <Col md={4} className="d-none d-md-block d-lg-block">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="mb-4">
              <TrendList tweetList={tweetList} />
            </div>
            <div>
              <UserList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
