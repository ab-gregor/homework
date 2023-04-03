import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.svg';
import Card from 'react-bootstrap/Card';
import NavBaar from './NavBaar';
import AddProduct from './AddProduct';
import { useState } from 'react';
import Products from './Products';
import laptop from './Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
import watch from './PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
import headphone from './head.jpg'

import './App.css';


function App() {
  const [showForm, setShowForm]=useState(false)
  const[products,setProduct]=useState([
    {
      id:1,
      pname:'Turbo',
      price: 50000,
      img: laptop
    },
    {
      id:2,
      pname:'Smart Wax',
      price: 500,
      img:headphone
    },
    {
      id:3,
      pname:'BMC DiA Intake',
      price: 9500,
      img:watch
    }
    ])

    const addProduct =(product)=>{
      setProduct([...products,product])
    }
  return (
    <div>
      <div>
      <NavBaar onAdd={ () => setShowForm(!showForm)}/>
    </div>
    <div>
    { showForm && <AddProduct onAdd={addProduct}></AddProduct>}
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
    <Products products={products}></Products>
  
    </div>
    
    
    </div>
    </div>
  );
}

export default App;
