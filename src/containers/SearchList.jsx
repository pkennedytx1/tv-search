import React, { createElement } from 'react';
import { Card } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function SearchList({ showData, searchTerm }) {
    return(
        <>
            <h2>{showData?.length > 0 && `Results for: ${searchTerm}`}</h2>
            {showData?.map((show) => {
                const { id, name, image, summary } = show.show
                return(
                    <Card style={{ marginTop: '20px' }} key={id}>
                        <Card.Img variant="top" src={image.original} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rating: {show.score}</Card.Subtitle>
                            {parse(summary)}
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}