import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar bg="black" variant="dark" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img alt="logo" src="img/pnkf.png" width="60" height="60" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="end"
            className="text-bg-dark"
          >
            <Offcanvas.Header closeButton className="justify-content-end btn-close-white" />
            <Offcanvas.Body>
              <Nav className="d-flex align-items-center">
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/">Kendo</Nav.Link>
                <Nav.Link href="/">Iaido</Nav.Link>
                <Nav.Link href="/">Jodo</Nav.Link>
                <Nav.Link href="/">Events</Nav.Link>
                <Nav.Link href="/">Member Resources</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar