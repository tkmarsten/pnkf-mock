import { Container, Row, Col } from 'react-bootstrap'

const Masthead = () => {
  return (
    <header className="masthead text-white bg-black">
      <Container className="text-center">
        <Row className="mb-4">
          <Col>
            <img src="img/pnkf.png" alt="logo" width="200" height="200" />
          </Col>
        </Row>
        <h1 className="mb-5">Pacific Northwest Kendo Federation</h1>
        <Row className="row-cols-5 g-5">
          <Col>
            <img src="img/Alaska.png" alt="logo" width="210px" />
          </Col>
          <Col>
            <img src="img/Idaho.png" alt="logo" width="100px" />
          </Col>
          <Col>
            <img src="img/Montana.png" alt="logo" width="200px" />
          </Col>
          <Col>
            <img src="img/Oregon.png" alt="logo" width="170px" />
          </Col>
          <Col>
            <img src="img/Washington.png" alt="logo" width="200px" />
          </Col>
        </Row>
      </Container>
    </header >
  )
}

export default Masthead