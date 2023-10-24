import React, { createElement } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FavoriteIconOutlined, FavoriteIconFilled } from '../component/icons';
import { ShowCard } from '../component/SShowCard';
import parse from 'html-react-parser';

export default function SearchList({ 
    showData,
    searchTerm,
    handleShowFavorited,
    handleToWatchLater,
    favorites
}) {
    return(
        <>
            <h2 style={{ textAlign: 'center' }} >{showData?.length > 0 && `Results for: ${searchTerm}`}</h2>
            <Container>
                <Row>
                {showData?.map((show) => {
                    const { id, name, image, summary, externals: { imdb }} = show?.show
                    return(
                            <Col xs={12} sm={12} md={6} lg={4} key={id}>
                                <ShowCard>
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
                                        <Button onClick={() => handleToWatchLater({
                                            id,
                                            name,
                                            imdb
                                        })}>
                                            Add to watch later
                                        </Button>
                                    </Card.Body>
                                </ShowCard>
                            </Col>
                    )
                })}
                </Row>
            </Container>
        </>
    )
}