import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewDetails = ({ cmnt }) => {

    const { img, text, rating } = cmnt;
    return (
        <div>
            <div className='d-flex'>
                <img src={img} style={{ height: '50px', width: "50px", borderRadius: "50%" }} alt="" />
                <p>{text}</p>

            </div>

            <p > Rating : <span className='fw-bold'>{rating}</span>  <FontAwesomeIcon className='text-warning' icon={faStar} /></p>

        </div>

    );
};

export default ReviewDetails;