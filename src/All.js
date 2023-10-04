import logo from './logo.svg';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function All() {

  const [products , setProducts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/all")
  .then(res => res.json())
  .then(data => {
    setProducts(data)
    console.log(data)
  })
  }, [])
  


  return (
    <div style={{ 
      width: '90%', 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      margin: 'auto'  
    }}>

    {Object.values(products).map((product) => (
      <Card key={product.id} style={{ width: '18rem', marginTop: '18px' }}>
        <Card.Img variant="top" src={product.imageURL} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.gender}
            {product.category}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    ))}
    </div>
  );
}

export default All;