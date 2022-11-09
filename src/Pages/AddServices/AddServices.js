import React from 'react';
import Form from 'react-bootstrap/Form';
import useTitle from '../../Hooks/useTitle';
const AddServices = () => {

    useTitle("Add Services")

    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const item = form.name.value;
        const description = form.description.value;
        const img = form.image.value;
        const price = form.price.value;


        const service = {
            item,
            img,
            description,
            price
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added Succesfully!')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='mt-3 w-50 mx-auto'>
            <h1>Add a Service</h1>
            <Form onSubmit={handleService}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Service Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name="image" type="text" placeholder="Image url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} placeholder="At least 100words" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="text" placeholder="Enter price" />
                </Form.Group>

                <input className='btn btn-primary mt-2' type="submit" value="ADD" />
            </Form>
        </div>
    );
};

export default AddServices;