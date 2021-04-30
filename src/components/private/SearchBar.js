import React from "react";
import { Form } from "react-bootstrap";
import SearchResults from "./SearchResults";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="cerca" />
        </Form.Group>
      </Form>
      <SearchResults />
    </div>
  );
};

export default SearchBar;
