import React, { useState, useEffect } from "react";
import { ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";

const TrendList = ({ tweetList }) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    processTags(tweetList);
  }, [tweetList]);

  const processTags = (json) => {
    const tagList = [];
    json.map((tweetItem) => {
      if (tweetItem.tags.length > 0) {
        for (let i = 0; i < tweetItem.tags.length; i++) {
          tagList.push(tweetItem.tags[i]);
        }
      }
    });

    const newTagList = _.countBy(tagList);

    const newArray = Object.keys(newTagList).map((key) => {
      return { id: key, name: key, count: newTagList[key] };
    });
    setTags(newArray);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-4">Tendenze</Card.Title>
        <ListGroup>
          {tags.map((tagItem) => (
            <ListGroup.Item key={tagItem.id}>
              <Link to={`/search/${tagItem.name.split("#")[1]}`}>{tagItem.name} {tagItem.count}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default TrendList;
