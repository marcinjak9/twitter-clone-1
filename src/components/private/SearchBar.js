import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SearchResults from "./SearchResults";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const onSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      history.push(`/search/${searchTerm}`);
    }
  };
  return (
    <div className="search-bar">
      <Form onSubmit={onSearch}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="cerca"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <SearchResults />
    </div>
  );
};

export default SearchBar;
