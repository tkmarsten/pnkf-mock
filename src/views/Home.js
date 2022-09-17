import Masthead from '../components/Masthead'
import Showcase from '../components/Showcase'
import Events from '../components/Events'
import News from '../components/News'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div className="text-center">
      <Masthead />
      <Showcase />
      <Row>
        <Col>
          <Events />
        </Col>
        <Col>
          <News />
        </Col>
      </Row>
    </div>
  )
}

export default Home