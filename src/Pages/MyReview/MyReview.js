import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Myreviewdetails from '../Myreviewdetails/Myreviewdetails';

const MyReview = () => {

    const { user, review, setreview } = useContext(AuthContext)







    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rev => rev._id !== id);
                        setreview(remaining);
                    }
                })
        }
    }



    console.log(review)
    return (
        <div>
            <h1 className='text-center mt-5'>My Reviews</h1>
            {review.map(rev => <Myreviewdetails setreview={setreview} review={review} handleDelete={handleDelete} key={rev._id} rev={rev}></Myreviewdetails>)}
        </div>
    );
};

export default MyReview;