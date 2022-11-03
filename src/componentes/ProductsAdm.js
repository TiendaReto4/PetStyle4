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
          <th>Producto</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Disfraz</td>
          <td>disfraz en algodón </td>
          <td>80</td>
          <td>25.000</td>
          <button type="button" class="btn btn-dark" align="center">Modificar</button>
        </tr>
        <tr>
        <td>2</td>
          <td>Blin-Blind</td>
          <td>Camisetas algodon estilo deporte americano</td>
          <td>90</td>
          <td>35.000</td>
          <button type="button" class="btn btn-dark" align="center">Modificar</button>
        </tr>
        <tr>
          <td>3</td>
          <td>Saco capota</td>
          <td>Saco de capota gris algodón perchado</td>
          <td>50</td>
          <td>45.000</td>
          <button type="button" class="btn btn-dark" align="center">Modificar</button>
        </tr>
        <tr>
          <td>4</td>
          <td>Gorro Gato (cerdito)</td>
          <td>Gorro de algodón con motivo de cerdito</td>
          <td>50</td>
          <td>15.000</td>
          <button type="button" class="btn btn-dark" align="center">Modificar</button>
        </tr>
        <tr>
          <td>4</td>
          <td>Saco tejido Gato</td>
          <td>saco tejido de lana sintetica para gato</td>
          <td>50</td>
          <td>28.000</td>
          <button type="button" class="btn btn-dark" align="center">Modificar</button>
        </tr>
        <tr>
          <td>5</td>
          <td>Saco capota</td>
          <td>saco de capota verde para gato</td>
          <td>30</td>
          <td>25.000</td>
          <button type="button" class="btn btn-dark" align="center">Modificar</button>
        </tr>
      </tbody>
    </Table>
  );
}
