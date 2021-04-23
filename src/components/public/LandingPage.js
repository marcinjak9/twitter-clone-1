import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/LandingPage.css'

export default function LandingPage() {
    return (
        <Container className="landing-container">
            <Row className="landing-row">
                <Col  md={6} sm={12} className="landing-col">
                    ciao
                </Col>
                <Col  md={6} sm={12} className="landing-col">
                    <div className="sfondolanding">
                        bella
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
