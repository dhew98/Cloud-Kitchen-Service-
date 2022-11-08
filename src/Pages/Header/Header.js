import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, fa } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';


const Header = () => {
    // const { user, logOut } = useContext(AuthContext);
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.error(error))
    // }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand > <h3> <img style={{ height: '50px' }} src='https://img.freepik.com/premium-vector/chef-icon-with-tray-food-hand_602006-191.jpg' alt='' /> <Link style={{ textDecoration: "None", color: "black" }} to='/' >Jawad's Recipe</Link></h3>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                        </Nav>

                        <Nav className='mx-3 fs-5 fw-bolder d-flex align-items-center'>
                            <Nav.Link ><Link style={{ textDecoration: "None", color: "black" }} to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "None", color: "black" }} to='/services'>Services</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "None", color: "black" }} to='/blog'>Blog </Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "None", color: "black" }} to='/faq'>FAQ </Link></Nav.Link>





                            {/* 

                            {
                                user?.uid ?
                                    <>


                                        <Nav.Link onClick={handleLogOut}> <Button variant="danger">Log out</Button>  </Nav.Link>

                                    </>
                                    :
                                    <>
                                        <Nav.Link ><Link style={{ textDecoration: "None", color: "black" }} to='/login'><Button variant="primary" className="fw-bold"  >Log In</Button> </Link></Nav.Link>

                                    </>
                            }
                            {user?.photoURL ?
                                <><Image
                                    roundedCircle
                                    style={{ height: '50px' }}
                                    src={user?.photoURL} data-tip data-for='userName' referrerPolicy="no-referrer" >

                                </Image>
                                    <ReactTooltip id='userName'>{user?.displayName}</ReactTooltip></>
                                : <FontAwesomeIcon icon={faUser} />
                            } */}




                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;