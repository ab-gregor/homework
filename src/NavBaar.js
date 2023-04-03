import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBaar({onAdd}) {
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><h3 id="logo">SMart</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="#action2">Offers</Nav.Link>
            <NavDropdown title="My Zone" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                My Wishlist
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                My Notifications
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Help Center</Nav.Link>
            <Nav.Link href="#action1=6"><Button variant="primary" onClick={onAdd}
            >Add product</Button></Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><span id='search-button'>Search</span></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default NavBaar