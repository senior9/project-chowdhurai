import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../../../Images/chowdhuranyLogo-03.png";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar fixed={'top'} className={'position-sticky ps-0' } collapseOnSelect expand="lg" bg="light" variant="dark">
                <Navbar.Brand as={Link}  to ="/" className='mx-5' href="#home">
                    <img className='' style={{ height: "40px" }} src={logo} alt="" />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="gap-5 me-auto">
                        <Nav.Link as={Link} to='home' className='text-danger' href="#home"><strong>Home</strong></Nav.Link>
                        <Nav.Link   className='text-danger' href="home#shop"><strong>Shop</strong></Nav.Link>
                        <NavDropdown bg="info" className='text-danger' title={<span className='text-danger'><strong>Chudharani-Services</strong></span>} id="collasible-nav-dropdown">
                            <NavDropdown.Item className='text-danger' href="#action/3.1">Crafting Product</NavDropdown.Item>
                            <NavDropdown.Item className='text-danger' href="#action/3.2">
                                Export Quality
                            </NavDropdown.Item>
                            <NavDropdown.Item className='text-danger' href="#action/3.3">Handmade Product</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="gap-5 mx-5">
                        <Nav.Link as={Link} to='/blogs' className='text-danger' href="#blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about' className='text-danger' href="#blog">About</Nav.Link>
                        <Nav.Link as={Link} to='/login' className='text-danger' eventKey={2} href="#memes">
                            <strong>Login</strong>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;