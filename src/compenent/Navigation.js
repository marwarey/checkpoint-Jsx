import {Navbar,Container,Nav} from 'react-bootstrap';

export function Navigation(){
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )
}
