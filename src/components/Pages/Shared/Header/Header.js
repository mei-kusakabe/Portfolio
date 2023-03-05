import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaDownload, FaEye } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect className='nav-bg text-white' expand="lg" variant="light">
                <Container>
                    <div className=''>
                        <span>
                            <img src="https://cdn-icons-png.flaticon.com/512/1063/1063299.png" alt="Logo" width="40" height="45" className="d-inline-block align-text-center" />
                            <Navbar.Brand href="/" className='fw-bold title'>  Jafrin Iqbal Chowdhury</Navbar.Brand>
                        </span>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            {/* <Nav.Link href="/" className='pe-2 fw-bold link-button' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Home</Nav.Link>
                                <Nav.Link href="/ad" className='pe-2 fw-bold link-button' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Projects</Nav.Link>
                                <Nav.Link href="/blog" className='pe-2 fw-bold link-button' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Contact Me</Nav.Link>
                                <Nav.Link href="https://drive.google.com/file/d/1VwIb0aQHqyPAIht88e48L0S1MY4B5sXK/view?usp=sharing" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>View Resume</Nav.Link> */}

                            <Nav.Link href="/" className='pe-2 me-2 fw-bold link-button'>Home</Nav.Link>
                            <Nav.Link href="/projects" className='pe-2 me-2 fw-bold link-button' >Projects</Nav.Link>
                            <Nav.Link href="/contact" className='pe-2  me-3 fw-bold link-button' >Contact Me</Nav.Link>
                            <Nav.Link href="https://drive.google.com/file/d/1VwIb0aQHqyPAIht88e48L0S1MY4B5sXK/view?usp=sharing" className='pe-2 me-2 fw-bold link-button'><FaEye></FaEye>View Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;