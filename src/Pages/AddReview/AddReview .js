import Reac, { useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

const AddReview = () => {

    const service = useLoaderData()
    const { _id, item } = service;
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
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
        fetch('http://localhost:5000/reviews', {
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
        <div className='mt-3 w-50 mx-auto'>
            <h1>Add a Review</h1>
            <Form onSubmit={handleReview}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={user?.email} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control name="message" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <label for="rate">Rate the food : </label>

                    <select id="rate" name="rate">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="4">5</option>
                    </select>
                </Form.Group>

                <input className='btn btn-primary mt-2' type="submit" value="Post" />
            </Form>
        </div>
    );
};

export default AddReview;