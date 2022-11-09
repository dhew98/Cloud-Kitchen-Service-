import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Myreviewdetails from '../Myreviewdetails/Myreviewdetails';

const MyReview = () => {

    const { user } = useContext(AuthContext)
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])

    console.log(review)
    return (
        <div>
            <h1 className='text-center mt-5'>My Reviews</h1>
            {review.map(rev => <Myreviewdetails key={rev._id} rev={rev}></Myreviewdetails>)}
        </div>
    );
};

export default MyReview;