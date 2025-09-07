"use client";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
     
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <h1>Hamare Madrasa ke baare mein</h1>
            <p>
            Hum ek mukhlis Islami idara hain jo tamaam umar ke talaba ko ruhani rehnumai aur taleem faraham karta hai. Hamara madrasa Islami aqdar, taleemi bartri, aur community ki taamir par tawajju markooz karta hai.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
