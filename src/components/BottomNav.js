import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import './Nav.css'
const BottomNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#041E42'}}>
                <Container className="justify-content-end" style={{fontWeight:'bold'}}>
                 General RFP
                </Container>
            </Navbar>
        </div>
    )
}

export default BottomNav
