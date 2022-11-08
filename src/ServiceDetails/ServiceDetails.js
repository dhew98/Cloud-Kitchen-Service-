import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { img, item, price, description } = service;
    return (
        <div>
            <Container >
                <Row>

                    <Col xs={6} className='mt-2 p-5'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{item}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} className='mt-2 p-5'>

                        <div >
                            <h2> Service Details </h2>
                            <p>{description}</p>
                            <p >Price : <span className='fw-bold'>{price}</span> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;