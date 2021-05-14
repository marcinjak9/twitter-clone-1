import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import TweetList from "./TweetList";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import TrendList from "./TrendList";
import ApiUtils from "./ApiUtils";
import { useParams } from "react-router-dom";

export default function Home({ token }) {
  const [tweetList, setTweetList] = useState([]);
  const { q } = useParams();
  console.log(q);

  const fetchTweets = () => {
    if (q) {
      ApiUtils(`tweets/tag/${q}`).then((json) => {
        setTweetList(json);
      });
    } else {
      ApiUtils("tweets/feed").then((json) => {
        setTweetList(json);
      });
      console.log("else");
    }
  };
  useEffect(() => {
    fetchTweets();
  }, [q]);
  return (
    <div>
      <Container>
        <Row>
          <Col
            md={2}
            sm={4}
            xs={4}
            className="d-block d-sm-block d-md-none d-xl-none d-lg-none"
          >
            <NavbarMobile />
          </Col>
          <Col md={2} className="d-none d-md-block d-lg-block">
            <NavbarDesktop />
          </Col>
          <Col md={7} sm={8} xs={8}>
            <TweetList
              token={token}
              tweetList={tweetList}
              fetchTweets={fetchTweets}
            />
          </Col>
          <Col md={3} className="d-none d-md-block d-lg-block">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="mb-4">
              Tendenze
              <TrendList tweetList={tweetList} />
            </div>
            <div>
              Profili da seguire
              <UserList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
