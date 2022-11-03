import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import imagen from '../imagenes/disfraz.jpg'
import imagen2 from '../imagenes/blind-blind.jpg'
import imagen3 from '../imagenes/saco-capota.jpg'
import imagen4 from '../imagenes/gorroGato.jpg'
import imagen5 from '../imagenes/sacoGato.jpg'
import imagen6 from '../imagenes/sacoCapotaGato.jpg'

export function Inventario() {
  return (
   
    <div className="container">
    <div className="mt-5 text-center" ><h1>Inventario</h1></div>
   
    <div className="row mt-5">

    
      <div className="col-8 text-start">
   
   <Button variant="primary">Añadir</Button>{' '}
   
   </div>
 
 
   
   <div  className="col-4 text-end">
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
    </div>
    </div>
    
   
    <div className="row ">

      <div className="col-3">
              
        
        <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Disfraz</Card.Title>
        <Card.Text>
       
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Disfraz</Card.Title>
        <Card.Text>
       
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
    
    
      </div> 

      <div className="col-3">
      
        
        <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen2} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Blin-Blind</Card.Title>
        <Card.Text>
       
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
        
        
    <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen2} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Blin-Blind</Card.Title>
        <Card.Text>
       
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
        
      </div>

      <div className="col-3">
      <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen3} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Saco capota</Card.Title>
        <Card.Text>
       
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
        
         <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen3} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Saco capota</Card.Title>
        <Card.Text>
       
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
      </div>

      <div className="col-3">
        
        
        <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen4} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Gorro Gato</Card.Title>
        <Card.Text>
     
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '15rem' }} className="mb-3">
      <Card.Img variant="top" src={imagen4} style={{ height: '10rem' }}/>
      <Card.Body>
        <Card.Title>Gorro Gato</Card.Title>
        <Card.Text>
     
          Precio: $ 30.000
          <br/>
          Stock: 6
        </Card.Text>
      <div className="text-end">
        <Button variant="success">Editar</Button>
        <Button variant="danger">Eliminar</Button>
        </div>
        
      </Card.Body>
    </Card>
      </div>



    </div>
  </div>
    
  );
}
