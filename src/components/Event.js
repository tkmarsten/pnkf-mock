import { Col, Row, Container } from 'react-bootstrap'

const Event = () => {
  return (
    <Container className="mb-4">
      <Row className="d-flex align-items-center" xs="auto">
        <Col>
          <Row>
            1 Sept
          </Row>
          <Row>
            7-8pm
          </Row>
        </Col>
        <Col>
          <div className="vl"></div>
        </Col>
        <Col className="eventDetail">
          <h5>Event name</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default Event