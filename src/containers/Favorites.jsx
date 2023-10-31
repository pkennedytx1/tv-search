import React from 'react'
import { PageHeader } from '../component/STitle'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';

export default function Favorites({ favorites }) {
    console.log(favorites);
    return(
        <Container>
            <PageHeader>
                My Favorites
            </PageHeader>
            {favorites.length === 0 && <h3 style={{ textAlign: 'center' }}>No Shows Saved for Later</h3>}
            {favorites?.map((show) => {
                const {id, name} = show
                return(
                    <Card key={id}>
                        <Row>
                            <Col sm={12} md={6}> 
                                <Card.Body>{name}</Card.Body>
                            </Col>
                            <Col sm={12} md={6}>
                                <Card.Body>
                                    <Button
                                        variant='danger'
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            })}
        </Container>
    )
}