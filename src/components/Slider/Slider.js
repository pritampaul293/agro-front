import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <Container className='Carousel'>
      <Row>
       <Col sm={12} md={8}>
       <Carousel className='carouselCard'>
      <Carousel.Item >
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2022/08/%E0%A6%B9%E0%A6%B2%E0%A7%81%E0%A6%A6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='sliderHeading'>টাঙ্গাইলে হলুদ চাষে লাভবান হচ্ছেন চাষিরা!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2021/02/%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9A%E0%A6%BE-%E0%A6%9B%E0%A6%9F%E0%A7%8B.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='sliderHeading'>ব্রয়লার পালনে বাচ্চা ছোট-বড় হওয়া সমস্যায় করণীয়</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2022/11/%E0%A6%9A%E0%A6%BE%E0%A6%81%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C%E0%A7%87-%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%86%E0%A6%AE%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A6%BE%E0%A6%A8-%E0%A6%97%E0%A7%9C-%E0%A6%93%E0%A6%9C%E0%A6%A8-%E0%A7%A9%E0%A7%A6%E0%A7%A6-%E0%A7%AA%E0%A7%A6%E0%A7%A6-%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='sliderHeading'>চাঁপাইনবাবগঞ্জে নতুন জাতের আমের সন্ধান</h3>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2021/12/telamola.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <h3 className='sliderHeading'>পুকুরে মলা মাছের সাথে তেলাপিয়া মাছের চাষ</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </Col>
       <Col sm={6} md={4} >
       <Card style={{ width: '22rem', height: '26rem',marginLeft:'3rem',marginRight:'2rem', borderRadius:'1rem',boxShadow:'1px 3px 6px' }}>
       {/* <Link  to="/Ecom"> */}
       <Card.Img  src="https://gbagrovetgroupbd.com/assets/backend/img/uploads/product/image/1698367027188894Untitled-3.jpg" alt="Card image" />
      <Card.ImgOverlay>
        
        
      
      </Card.ImgOverlay>
        <Card.Text className='textPicture'>মূল্যঃ ১১০ টাকা+কুরিয়ার চার্জসহ</Card.Text>
        <Card.Text className='textPicture2'>বিস্তারিতঃ০১৮৭৬৯৮০০২১ </Card.Text>
        {/* </Link> */}
    </Card>
       </Col>
      </Row>
    </Container>
        
    );
};

export default Slider;