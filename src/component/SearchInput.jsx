import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function SearchInput({
    searchTermInput,
    setSearchTermInput,
    searchShow,
    isSearchTermValid,
    setIsSearchTermValid
}) {
    return(
        <div style={{ margin: '0 auto', maxWidth: '400px', marginTop: '40px' }}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Show Name"
                    aria-label="Show Name"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                        setSearchTermInput(e.target.value)
                        setIsSearchTermValid(true)
                    }}
                    value={searchTermInput}
                    isInvalid={!isSearchTermValid}
                />
                <Button
                    onClick={() => {
                        searchShow(searchTermInput)
                    }}
                    variant="outline-secondary"
                    id="button-addon2">
                    Search Show
                </Button>
                <Form.Control.Feedback type="invalid">
                    Please enter a search term.
                </Form.Control.Feedback>
            </InputGroup>
        </div>
    )
}