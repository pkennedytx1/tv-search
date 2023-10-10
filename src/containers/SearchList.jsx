import React, { createElement } from 'react';
import { Card, Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import { FavoriteIconOutlined, FavoriteIconFilled } from '../component/icons';

export default function SearchList({ 
    showData,
    searchTerm,
    handleShowFavorited,
    favorites
}) {
    return(
        <>
            <h2>{showData?.length > 0 && `Results for: ${searchTerm}`}</h2>
            {showData?.map((show) => {
                const { id, name, image, summary } = show?.show
                console.log(show);
                return(
                    <Card style={{ marginTop: '20px' }} key={id}>
                        <Card.Img variant="top" src={image?.original} />
                        <Card.Body>
                            <Card.Title>{name && name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rating: {show?.score}</Card.Subtitle>
                            {summary && parse(summary)}
                            <Button onClick={() => handleShowFavorited(id)} variant="light">
                                {
                                    favorites?.includes(id) ?
                                    <FavoriteIconFilled size='36' color='#FF0000'/> :
                                    <FavoriteIconOutlined size='36' color='#FF0000'/>
                                }
                            </Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}