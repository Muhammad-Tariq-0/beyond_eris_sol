import React from 'react'
import './subNav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Row, Col, Card } from 'react-bootstrap';
import first from '../../images/first.jpg'
import second from '../../images/second.jpeg'
import third from '../../images/third.jpeg'
const TravelInformation = () => {
    return (
        <div className="TravelIno-first-div">
            <h3 className="TravelIno-page-text">Venue: Pennsylvania Convention Center</h3>
            <p>Address: 1101 Arch St, Philadelphia, PA 19107, United States</p>
           <br/>          
            <h3 className="TravelIno-page-text">Recommended Hotels</h3>
       {/* slider */}
       <Carousel>

  {/* first crou... item of slider */} 
  <Carousel.Item style={{paddingLeft:'150px',paddingRight:'150px',paddingTop:'30px'}}>
    <Row xs={1} md={3} className="g-4">
  
    <Col>
      <Card>
        <Card.Img variant="top" src={first} width={200} height={300}/>
        <Card.Body>
          <Card.Text>LE MERIDIAN PHILADELPHIA</Card.Text>
          4 min wakk from the venue
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={second} width={200} height={300}/>
        <Card.Body>
          <Card.Text>PHILADELPHIA MARRIOT DOWNTOWN</Card.Text>
          3 mins walk from the venue  
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={third} width={200} height={300}/>
        <Card.Body>
          <Card.Text>THE WESTIN PHILADELPHIA</Card.Text>
          9 mins walk from the venue
        </Card.Body>
      </Card>
    </Col>

</Row>

{/* Second crou... item of slider */}

  </Carousel.Item>
  <Carousel.Item style={{paddingLeft:'150px',paddingRight:'150px',paddingTop:'30px'}}>
    <Row xs={1} md={3} className="g-4">
  
    <Col>
      <Card>
        <Card.Img variant="top" src={first} width={200} height={300}/>
        <Card.Body>
          <Card.Text>LE MERIDIAN PHILADELPHIA</Card.Text>
          4 min wakk from the venue
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={second} width={200} height={300}/>
        <Card.Body>
          <Card.Text>PHILADELPHIA MARRIOT DOWNTOWN</Card.Text>
          3 mins walk from the venue  
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={third} width={200} height={300}/>
        <Card.Body>
          <Card.Text>THE WESTIN PHILADELPHIA</Card.Text>
          9 mins walk from the venue
        </Card.Body>
      </Card>
    </Col>

</Row>
  </Carousel.Item>


</Carousel>

        <div className="Reg-side">
            <p>
                I am a paragraph. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                through the cites of the word in classical literature, discovered the undoubtable source.
                <br/><br/>
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem
                Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from
                the 1914 translation by H. Rackham.
                    </p>
        </div>
        </div>
    )
}

export default TravelInformation
