import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ReviewDetails = ({ rev }) => {
    console.log(rev)

    const { customer, message, rating, img } = rev
    return (
        <div>
            <Card style={{ width: '40rem' }} className="border-0" >
                <Card.Body>
                    <Card.Title><div className='d-flex align-items-center'>
                        <Image
                            roundedCircle
                            style={{ height: '50px' }}
                            src={img} className="mx-3" />
                        <div>
                            <h5>{customer}</h5>
                            <p > <small>{rating}<FontAwesomeIcon className='text-warning' icon={faStar} /></small>  </p>
                        </div>

                    </div></Card.Title>

                    <Card.Text className="mx-5 px-4 mt-3" >
                        {message}

                    </Card.Text>
                </Card.Body>
            </Card>
            <div>

                <div className='px-5'>
                    <p></p>

                </div>

            </div>
        </div>
    )
};

export default ReviewDetails;