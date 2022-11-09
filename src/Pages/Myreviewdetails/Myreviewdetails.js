import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const Myreviewdetails = ({ rev, handleDelete, review, setreview }) => {

    const { customer, message, rating, img, serviceName, _id } = rev
    const [show, setShow] = useState(false);

    const [updateReview, setupdateReview] = useState("")

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        setupdateReview(message);
    }
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);

    }

    console.log("review", updateReview);

    const handleStatusUpdate = id => {

        setShow(false);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: updateReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(odr => odr._id !== id);
                    const approving = review.find(odr => odr._id === id);
                    approving.message
                        = updateReview

                    const newOrders = [approving, ...remaining];
                    setreview(newOrders);

                }
            })
    }




    return (
        <div>
            <div>
                <Card style={{ width: '40rem' }} className="border-0 mx-auto mt-5" >

                    <Card.Body>
                        <Card.Title><div className='d-flex align-items-center justify-content-between'>

                            <div>
                                <h5>Item Name : {serviceName} </h5>

                            </div>
                            <div className="mt-3 " >
                                <Button onClick={handleShow} className='mx-3' ><FontAwesomeIcon className='text-white' icon={faUserPen} /> </Button>
                                <Button onClick={() => handleDelete(_id)} variant='danger'><FontAwesomeIcon className='text-white' icon={faTrash} /> </Button>
                            </div>

                        </div></Card.Title>

                        <Card.Text className="" >
                            <p>Review :{message} </p>

                            <p > Rating : <small>{rating}<FontAwesomeIcon className='text-warning' icon={faStar} /></small>  </p>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <div>


                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Review  </Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleReview}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control name="message" as="textarea" rows={3} />
                        </Form.Group>
                        <input className='btn btn-primary mt-2' type="submit" value="Post" />
                    </Form>

                    <small>* click the post button before Save Changes!</small>
                </Modal.Body>

                <Modal.Footer>


                    <Button variant="primary" onClick={() => handleStatusUpdate(_id)}> Save Changes </Button>

                </Modal.Footer>
            </Modal>



        </div >
    );
};

export default Myreviewdetails;