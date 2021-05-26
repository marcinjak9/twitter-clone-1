import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import TweetList from "./TweetList";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import TrendList from "./TrendList";
import ApiUtils from "./ApiUtils";
import { useParams } from "react-router-dom";

export default function Home() {
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
  
  return (
    <div>
      <Container>
        <Row>
          <Col md={2} sm={1} xs={2}>
            <Navbar />
          </Col>
          <Col md={6} sm={8} xs={10}>
            <TweetList tweetList={tweetList} fetchTweets={fetchTweets} />
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
}
