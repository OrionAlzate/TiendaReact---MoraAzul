import './Menu.css'
import { Link } from "react-router-dom"
export function Menu(){

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">
                <div class="container-fluid">
                <Link class="navbar-brand li_navbar" to="/">
                    <img class="img_logo" src='https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-artesania-simple-hecha-mano_76712-507.jpg'></img>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <Link class="nav-link li_navbar " aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link li_navbar" to="/administrar">Agregar Productos</Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link li_navbar" to="/productos">Productos</Link>
                    </li>
                </ul>
                </div>
                </div>
            </nav>  
        </>
    )

}