import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { img, item, price, description, _id } = service;
    const [reviews, setreviews] = useState([])
    const [reviewer, setreviewer] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data.review))
    }, []);



    console.log(reviews);

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

                        <div>
                            <h1>Reviews</h1>
                            {
                                reviews.map((rev) => {
                                    if (rev.services === _id) {
                                        console.log(rev.services)
                                        rev.review.map(cmnt => <ReviewDetails key={cmnt.id} cmnt={cmnt}></ReviewDetails>)
                                    }
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;