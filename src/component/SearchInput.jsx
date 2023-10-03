import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function SearchInput({ searchTermInput, setSearchTermInput, searchShow }) {
    return(
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Show Name"
                aria-label="Show Name"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearchTermInput(e.target.value)}
                value={searchTermInput}
            />
        <Button onClick={() => searchShow(searchTermInput)} variant="outline-secondary" id="button-addon2">
            Search Show
        </Button>
        </InputGroup>
    )
}