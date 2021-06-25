import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo_colored_png.png'
import { Navbar, Container, Nav } from 'react-bootstrap';
import homepic from '../images/homepic.png'
import {
    Link
} from 'react-router-dom';
import './Nav.css'
const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#041E42'}}>
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

            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#041E42'}}>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">
                                <Link className='text-nav2' to='/'>
                                    Conference Overview
                                </Link>
                            </Nav.Link>
                            <div className="vl"></div>
                            <Nav.Link href="#">
                                <Link className='text-nav2' to='registration'>Registration</Link>
                            </Nav.Link>
                            <div className="vl"></div>
                            <Nav.Link href="#">
                                <Link className='text-nav2' to='travelInfo'>
                                    Travel Information
                                </Link>
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
