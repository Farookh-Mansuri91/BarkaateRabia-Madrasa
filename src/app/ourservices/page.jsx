// pages/services.js
"use client"
import NavigationBar from '@/app/component/common/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurServices = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="mt-5">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Islamic Education</Card.Title>
                <Card.Text>
                  Offering classes in Quran, Hadith, Fiqh, and Islamic history.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Community Outreach</Card.Title>
                <Card.Text>
                  Organizing charity events, community gatherings, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Weekend Classes</Card.Title>
                <Card.Text>
                  Special weekend classes for students who cannot attend daily.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurServices;
