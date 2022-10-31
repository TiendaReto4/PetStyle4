import React from "react";
import './App.css';
import { Navbar, Nav, Container} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { ProductsAdm } from "./componentes/ProductsAdm";
import { Inventario } from "./componentes/Inventario";
import { CarritoCompras } from "./componentes/CarritoCompras";
import { VentasAdm } from "./componentes/VentasAdm";
import { ProductosGeneral} from "./componentes/ProductosGeneral";
import logo from './imagenes/logo.png'

function Home() {
  return <h1>Home</h1>
}

function NotFound() {
  return <h1>NotFound</h1>
}

function App() {
  return ( 

    
<BrowserRouter>  
  <Navbar bg="light" expand="lg">
    <Container>

      <Navbar.Brand as={Link} to="home"><img src={logo} width="50%" height="70px"  alt="logo"/>  Pet Style</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link as={Link} to="home">Inicio</Nav.Link>
           <Nav.Link as={Link} to="productosGeneral">ProductosGeneral</Nav.Link>
           <Nav.Link as={Link} to="productsAdm">ProductsAdm</Nav.Link>
           <Nav.Link as={Link} to="ventasAdm">VentasAdm</Nav.Link>
           <Nav.Link as={Link} to="carritoCompras">CarritoCompras</Nav.Link>
           <Nav.Link as={Link} to="inventario">Inventario</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  <Routes>
    <Route path="/home" element={<Home />}/>
    <Route path="/productosGeneral" element={<ProductosGeneral />}/>
    <Route path="*" element={<NotFound />}/>
    <Route path="/productsAdm" element={<ProductsAdm />}/>
    <Route path="/ventasAdm" element={<VentasAdm />}/>
    <Route path="/carritoCompras" element={<CarritoCompras/>}/>
    <Route path="/inventario" element={<Inventario />}/>
    
    
  </Routes>
</BrowserRouter>  
  );
}

export default App;

