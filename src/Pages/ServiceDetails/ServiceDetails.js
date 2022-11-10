import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Form from 'react-bootstrap/Form';
import AddReview from '../AddReview/AddReview ';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { img, item, price, description, _id } = service;
    const { user } = useContext(AuthContext)



    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const rate = form.rate.value;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL;
        const message = form.message.value;
        console.log(rate);

        const review = {
            services: _id,
            serviceName: item,
            customer: name,
            rating: rate,
            email,
            message,
            img
        }
        fetch('https://server-six-kappa.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for Sharing Your Views!')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }


    return (
        <div>
            <Container >
                <Row className='w-75 mx-auto'>

                    <Col xs={12} className='mt-2 p-5 '>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{item}</Card.Title>
                            </Card.Body>
                            <Card.Img variant="top" src={img} />

                        </Card>
                    </Col>
                    <Col xs={12} className='mt-3 mx-5'>

                        <div>
                            <h2> Service Details </h2>
                            <p>{description}</p>
                            <p >Price : <span className='fw-bold'>${price}</span> </p>
                        </div>

                    </Col>
                </Row>
            </Container>
            <div className='mx-auto w-50 mt-4'>
                <h1 className='text-center'>Review From Our Customers</h1>
                <Reviews id={_id} />

                <div className='my-5'>
                    {/* <Link to={`/addReview/${_id}`} className='mt-5 mx-auto w-50'><Button variant="danger" size="lg">Add review</Button></Link> */}
                    {user?.uid ? <AddReview service={service} ></AddReview>

                        :
                        <> <h3>Please login to add a review!</h3>
                            <Link to='/login'> <Button>Log In</Button> </Link> </>

                    }

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;