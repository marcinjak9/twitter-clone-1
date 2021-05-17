import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import SearchResults from "./SearchResults";
import { useHistory } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="search-bar mt-4">
      <Form onSubmit={onSearch}>
        <InputGroup controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="cerca"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {/* <SearchResults /> */}
    </div>
  );
};

export default SearchBar;
