import React from "react"
import {Link} from "react-router-dom";
import "./NavBarStyle.css"


const NavBar = () => {
    return (
<header className="header" id="header-section">
  <div className="contenedor">
      <div className="barra">
          <a className="logo" href="index.html">
              <h1 className="logo__nombre no-margin entrar-texto">25 WATTS</h1>
          </a>
          <nav className="navegacion"> 

              <a href={"#header-section"} class="navegacion__enlace">Home</a>
              <a href={"#section-1"} class="navegacion__enlace">Actividades</a>
              <a href={"#section-2"} class="navegacion__enlace">Fotos</a>
              <a href={"#section-3"} class="navegacion__enlace">Planes</a>
              <a href={"#formulario-section"} class="navegacion__enlace">Contacto</a> 

          </nav>

      </div>

  </div>

  <div class="header__texto">
    <h2 class="no-margin" id="visitaMendoza">Visita Mendoza Capital del buen vino</h2>
    <p>Mendoza es una ciudad de la región de Cuyo en Argentina<br/> y es el corazón de la zona vitivinícola argentina.<br/> Sus distintas bodegas ofrecen degustaciones y visitas guiadas.<br/> La ciudad tiene calles amplias y frondosas rodeadas de edificios modernos, art déco,<br/> y con plazas más pequeñas que rodean la Plaza Independencia</p>
    <div class="boton_container">
      <a class="boton" href="#">Leer Más</a>
    </div>
  </div>
 
</header>

    );
  }

  export default NavBar;