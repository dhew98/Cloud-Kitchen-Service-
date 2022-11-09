import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = ({ service }) => {

    const { item, img, description, price, _id } = service;
    return (
        <div>
            <Card style={{ width: '25rem' }} className="m-5" >
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}..
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold'>{price}</p>

                    </div>

                    <Link to={`/services/${_id}`}> <Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;