import { Row, Col } from 'react-bootstrap'

const Showcase = () => {
  return (
    <div>
      <h5 className="p-4">Our Martial Arts</h5>
      <Row>
        <Col className="p-0">
          <div className="kendoShowcase text-white d-flex justify-content-center align-items-center">
            <h1>Kendo</h1>
          </div>
        </Col>
        <Col className="p-0">
          <div className="iaidoShowcase text-white d-flex justify-content-center align-items-center">
            <h1>Iaido</h1>
          </div>
        </Col>
        <Col className="p-0">
          <div className="jodoShowcase text-white d-flex justify-content-center align-items-center">
            <h1>Jodo</h1>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Showcase