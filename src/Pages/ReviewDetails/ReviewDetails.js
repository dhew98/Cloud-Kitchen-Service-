import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';

const ReviewDetails = ({ rev }) => {
    console.log(rev)

    const { customer, message, rating, img } = rev
    return (
        <div>
            <div>
                <Image
                    roundedCircle
                    style={{ height: '50px' }}
                    src={img} />
                <h5>{customer}</h5>
                <p>{message}</p>
                <p> {rating} <FontAwesomeIcon className='text-warning' icon={faStar} /></p>
            </div>
        </div>
    )
};

export default ReviewDetails;