import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import laptop from './Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
import watch from './PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
import headphone from './head.jpg'

const Product = ({pselect}) => {
  return (
    <div >
        <Card style={{ width: '18rem' }} className="c">
      <Card.Img variant="top" src={pselect.img} />
      <Card.Body>
        <Card.Title>{pselect.pname}</Card.Title>
        <Card.Text>{pselect.price}</Card.Text>
        
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product