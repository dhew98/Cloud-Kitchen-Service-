import React from 'react';
import Form from 'react-bootstrap/Form';
const AddServices = () => {
    return (
        <div className='mt-3 w-50 mx-auto'>
            <h1>Add a Review</h1>
            <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    {/* <Form.Control defaultValue={user?.displayName} type="text" placeholder="Enter Your Name" /> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    {/* <Form.Control defaultValue={user?.email} type="email" placeholder="name@example.com" /> */}
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
                        <option value="5">5</option>
                    </select>
                </Form.Group>

                <input className='btn btn-primary mt-2' type="submit" value="Post" />
            </Form>
        </div>
    );
};

export default AddServices;