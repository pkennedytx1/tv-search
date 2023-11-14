import React from 'react'
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap'
import { PageHeader } from '../component/STitle'

export default function ToWatch({
    watchLater,
    handleToWatchLater
}) {
    return(
        <Container>
            <PageHeader>
                To Watch Later
            </PageHeader>
            {watchLater.length === 0 && <h3 style={{ textAlign: 'center' }}>No Shows Saved for Later</h3>}
            {watchLater?.map((show) => {
                const {id, name} = show
                console.log(show)
                return(
                    <Card key={id}>
                        <Row>
                            <Col sm={12} md={4}> 
                                <Card.Body>{name}</Card.Body>
                            </Col>
                            <Col sm={12} md={4}>
                                <Card.Body>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Currently Watching"
                                    />
                                </Card.Body>
                            </Col>
                            <Col sm={12} md={4}>
                                <Card.Body>
                                    <Button
                                        onClick={() => handleToWatchLater(show)}
                                        variant='danger'
                                    >
                                        Finished
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