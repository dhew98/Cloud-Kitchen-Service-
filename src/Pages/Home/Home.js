import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Services from '../../Services/Services';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0">

                    <div class="col-md-6 mt-5">
                        <div class="card-body mt-5 mx-5 p-5">
                            <h1 class="card-title display-2">Welcome to Jawad's Recipe</h1>
                            <p class="card-text fs-4">Prepare Meals According to Your Choice  <br /> and Dietary Preference</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="1.png" class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
            <h1 className="text-center mt-5" >Our Services</h1>

            <CardGroup className='mt-3 '>
                {services.map(service => <Services
                    key={service._id}
                    service={service}
                />)
                }
            </CardGroup>
            <div className="text-center">
                <Button variant="danger" size="lg">See All</Button>
            </div>

            <Container className="mt-5" >
                <Row>
                    <Col xs={12} md={6}>
                        <img style={{ height: '500px' }} src='2.PNG' alt='' />
                    </Col>
                    <Col xs={6} md={6}>
                        <div className='mt-5 p-5'>
                            <h1 className='mt-5 p-3 display-5'>About Chef</h1>
                            <p>Our chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation. Our chef create a bridge between the traditional and foreign foods and bringing intense excitement , banalanced flavours and testy cuisines.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Home;