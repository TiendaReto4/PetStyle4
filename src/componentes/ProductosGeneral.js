import React from "react";
import imagen from '../imagenes/disfraz.jpg'
import imagen2 from '../imagenes/blind-blind.jpg'
import imagen3 from '../imagenes/saco-capota.jpg'
import imagen4 from '../imagenes/gorroGato.jpg'
import imagen5 from '../imagenes/sacoGato.jpg'
import imagen6 from '../imagenes/sacoCapotaGato.jpg'

export function ProductosGeneral() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-4">
          <div className="Card">
          <img src={imagen} class="card-img-bottom" width="60%"   alt=""/>
            <div className="card-body">
             <h4 className="card-tittle"align="center">Disfraz</h4>
             <p className="card-text" align="center"> disfraz diversos personajes performance
              para razas pequeñas, medianas y grandes. escoger la talla segun tabla de medidas 
             </p>
             <button type="button" class="btn btn-outline-info" align="center">Añadir al carrito</button>
            </div>
          </div>
        </div> 

        <div className="col-md-4">
          <div className="Card">
          <img src={imagen2} class="card-img-bottom" width="80%" alt=""/>
            <div className="card-body">
             <h4 className="card-tittle" align="center">Blin-Blind</h4>
             <p className="card-text" align="center"> Camisetas algodon estilo 
             deporte americano razas pequeñas, medianas y grandes.
             </p>
             <button class="btn btn-outline-info" type="button">Añadir al carrito</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Card">
          <img src={imagen3} class="card-img-bottom" width="60%" alt=""/>
            <div className="card-body">
             <h4 className="card-tittle" align="center">Saco capota</h4>
             <p className="card-text" align="center"> saco de capota gris
             algodón perchado pequeñas, medianas y grandes.
             </p>
             <a href="#" class="btn btn-outline-info">Añadir al carrito</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Card">
          <img src={imagen4} class="card-img-bottom" width="50%" alt=""/>
            <div className="card-body">
             <h4 className="card-tittle" align="center">Gorro Gato (cerdito)</h4>
             <p className="card-text" align="center"> Gorro de algodón con 
             motivo de cerdito para gato tamaño mediano.
             </p>
             <a href="#" class="btn btn-outline-info">Añadir al carrito</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Card">
          <img src={imagen5} class="card-img-bottom" width="40%" alt="" lenght="30px" />
            <div className="card-body">
             <h4 className="card-tittle" align="center">Saco tejido Gato</h4>
             <p className="card-text" align="center"> saco tejido de lana sintetica
             para gato de raza mediana.
             </p>
             <a href="#" class="btn btn-outline-info">Añadir al carrito</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Card">
          <img src={imagen6} class="card-img-bottom" width="60%" alt=""/>
            <div className="card-body">
             <h4 className="card-tittle" align="center">Saco capota</h4>
             <p className="card-text" align="center"> saco de capota verde para gato raza mediana 
             alaborado en algodon.
             </p>
             <a href="#" class="btn btn-outline-info">Añadir al carrito</a>
            </div>
          </div>
        </div>

      </div>
    </div>
   


    
  );
}  // crear el disenio de acuerdo a las bibliotecas de bootstrap
