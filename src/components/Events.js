import { Container } from 'react-bootstrap'
import Event from './Event'

const Events = () => {
  return (
    <Container>
      <h5 className="p-4">Events</h5>
      <Event />
      <Event />
      <Event />
    </Container>
  )
}

export default Events