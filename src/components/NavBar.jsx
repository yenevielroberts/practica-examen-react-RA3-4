import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

 export default function NavBar(){
    const [isOpen, setIsOPen]=useState(false);

    const urlActual=useLocation();

    // Función para cerrar el menú al hacer clic en un enlace
    const closeMenu = () => setIsOpen(false);
    return(
        <>
            <header className="header-container" aria-label="barra de navegación ">
                <div className="header-content">
                    <nav className="nav-container" aria-label="menú principal">
                        {/**Boton hamburguesa */}

                        {/**Si el state isOPen es true se aplicará la clase is-active 
                         * aria-expanded={isOpen} // Informa si el menú está desplegado
                         * aria-controls="main-menu" // Conecta el botón con la lista
                         * aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        */}
                        <button className={`hamburguesa ${isOpen ? 'is-active':''}`} onClick={()=>setIsOPen(!isOpen)} aria-expanded={isOpen} aria-controls="main-menu" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                        </button>

                        <ul id="main-menu" className={`ul-lista-enlaces ${isOpen? 'open':''}`}>
                            <li><Link to="/"  className={urlActual.pathname==="/" ? "active-link" : "nav-enlace"} aria-current={urlActual.pathname === "/" ? "page" : undefined}>Inicio</Link></li>

                            <li><Link to="/Gallery"   className={urlActual.pathname==="/Gallery" ? "active-link" : "nav-enlace"} aria-current={urlActual.pathname === "/Gallery" ? "page" : undefined}>Gallery</Link></li>

                            <li><Link to="/form"  className={urlActual.pathname==="/form" ? "active-link" : "nav-enlace"}aria-current={urlActual.pathname === "/form" ? "page" : undefined}>Form</Link></li>
                        </ul>
                    </nav> 
                </div>
            </header>
        </>
    )
}

 