import { Container } from 'react-bootstrap'
import Kenyu from './Kenyu'

const News = () => {
  return (
    <Container>
      <h5 className="p-4">Latest News</h5>
      <Kenyu />
      <Kenyu />
      <Kenyu />
    </Container>
  )
}

export default News