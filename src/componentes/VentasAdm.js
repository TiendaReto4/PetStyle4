import React from "react";
import Table from 'react-bootstrap/Table';

export function VentasAdm() {
  return (
    <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Fecha</th>
           <th>Nombre producto</th>
           <th>Cantidad</th>
           <th>Precio</th>
           <th>Total</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>10/01/2022</td>
           <td>disfraz</td>
           <td>1</td>
           <td>25000</td>
           <td>25000</td>
         </tr>
         <tr>
           <td>2</td>
           <td>11/01/2022</td>
           <td>Saco capota</td>
           <td>1</td>
           <td>45000</td>
           <td>45000</td>
         </tr>
        
       </tbody>
     </Table>
  )

  //tabla de inventario para ver los productos exitentes crear las columnas requeridas 
}
