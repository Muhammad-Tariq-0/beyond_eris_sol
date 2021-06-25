import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo_colored_png.png'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import diplomats_Advocate_INFJ_personality_header from '../images/personality_types_details/diplomats_Advocate_INFJ_personality_header.svg'
import phila from '../images/phila.jpeg'
import homepic from '../images/homepic.png'
import './Nav.css'
const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <a href="/" className='logo'>
                            <img src={logo} alt="loading..." width={110} height={70} />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className='text'>
                                <strong>Events Management</strong>
                            </Nav.Link>
                            <Nav.Link href="#" className='text-active'>
                                <strong>Congress & Exhibition</strong>
                            </Nav.Link>
                            <Nav.Link href="#" className='text'>
                                <strong>Production</strong>
                            </Nav.Link>
                            <Nav.Link href="#" className='text'>
                                <strong>Engagement</strong>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <img src={homepic} alt="Snow" className='cropped1'/> */}
            <div >
                <img src={homepic} alt="Snow" className='cropped1' />
                <div class="top-left"> &lt; Back</div>
                <div class="centered">
                    <center><h1 className='main-text'>ID WEEK 2020</h1> <br /></center>
                    <center> <h4 className='child-text'> 21 - 25 OCTOBER</h4></center>
                    <h3 className='child-text'>PHILADELPHIA, PENNSYLVANIA, USA</h3>
                </div>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className='text-nav2'>
                            Conference Overview
                            </Nav.Link>
                            <div className="vl"></div>
                            <Nav.Link href="#" className='text-nav2'>
                            Registration
                            </Nav.Link>
                            <div className="vl"></div>
                            <Nav.Link href="#" className='text-nav2'>
                            Travel Information
                            </Nav.Link>
                             <div className="vl"></div>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
