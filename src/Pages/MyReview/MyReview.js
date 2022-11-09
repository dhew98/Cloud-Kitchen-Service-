import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

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
            hello {review.message}
        </div>
    );
};

export default MyReview;