import React from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

import { useEffect } from 'react';
import { useState } from 'react';

const Reviews = ({ id }) => {
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, []);

    console.log(review)
    return (
        <div>
            {
                review.length ? review.map(rev =>
                    <ReviewDetails key={rev._id} rev={rev}></ReviewDetails>) :
                    <> <p className='text-center'>No Reviews posted yet!</p> </>


            }
        </div>
    );
};

export default Reviews;



