import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import imagen from '../imagenes/disfraz.jpg'
import imagen2 from '../imagenes/blind-blind.jpg'
import imagen3 from '../imagenes/saco-capota.jpg'
import imagen4 from '../imagenes/gorroGato.jpg'
import imagen5 from '../imagenes/sacoGato.jpg'
import imagen6 from '../imagenes/sacoCapotaGato.jpg'


export function ProductsAdm() {
  return (
     <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Username</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Mark</td>
           <td>Otto</td>
           <td>@mdo</td>
         </tr>
         <tr>
           <td>2</td>
           <td>Jacob</td>
           <td>Thornton</td>
           <td>@fat</td>
         </tr>
         <tr>
           <td>3</td>
           <td colSpan={2}>Larry the Bird</td>
           <td>@twitter</td>
         </tr>
       </tbody>
     </Table>
    
 
    
  );
}
