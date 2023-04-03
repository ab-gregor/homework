import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.svg';
import Card from 'react-bootstrap/Card';
import laptop from './Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
import watch from './PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
import headphone from './head.jpg'

import './App.css';


function App() {
  return (
    <div>
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
            <Nav.Link href="#action1=6">Add Product</Nav.Link>
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
    <div className="App">
    <header className="App-header">
      </header>
    <div>
    <Card className="feat-card">
      <Card.Header>BlockBuster Deals</Card.Header>
      <Card.Body id="featured">
        <Card.Title>Fashion at 50%</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
    <div className='card-div'>
    <Card style={{ width: '18rem' }} className="c">
      <Card.Img variant="top" src={laptop} />
      <Card.Body>
        <Card.Title>Laptops</Card.Title>
        
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="c">
      <Card.Img variant="top" src={watch} alt='Image'/>
      <Card.Body>
        <Card.Title>Watches</Card.Title>
        
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="c">
      <Card.Img variant="top" src={headphone} alt='Image'/>
      <Card.Body>
        <Card.Title>Headphones</Card.Title>
        
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  
    </div>
    
    
    </div>
    </div>
  );
}

export default App;
