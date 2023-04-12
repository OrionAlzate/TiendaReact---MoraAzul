import { Profiler } from 'react';
import './AmpliarInfo.css'
// import {Tienda} from '../Tienda/Tienda.js'
import { useLocation } from 'react-router-dom'



export function ApliarInfo() {


    let location = useLocation();
    let producto = location.state.producto;
    console.log(producto)

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container-sm">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img
                            src={producto.foto}
                            class="w-100 img-fluid"
                            alt="fotoEjemplo"
                        />
                        <br/>
                        <br/>
                        <h5>Descripción del producto:</h5>
                        <p>{producto.descripcion}</p>
                    </div>
                    <div class="col-12 col-md-6 border p-3 rounded shadow ">
                        <h2 class="fw-bold">{producto.nombre}</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Más vendido</span>
                        <br></br>
                        <br></br>
                        <h3>${producto.precio}</h3>
                        <span class="badge text-bg-primary mt-3">Ofertón del día</span>

                        <div class="">
                            <img class="img-fluid me-3"
                                src='https://firebasestorage.googleapis.com/v0/b/tiendamoraazul-fba5e.appspot.com/o/visa.png?alt=media&token=46b500ad-7525-463f-b42a-a81cf23e9e7a'
                                alt='foto1'
                            />
                            <img class="img-fluid me-3"
                                src='https://firebasestorage.googleapis.com/v0/b/tiendamoraazul-fba5e.appspot.com/o/american-express.png?alt=media&token=fdb76655-a351-4fb5-bb46-ca07abcb6321'
                                alt='foto1'
                            />

                            <br></br>
                            <br></br>
                            <i class="bi bi-truck display-1 my-5" ></i>
                            <p>Entrega en Medellín y Valle del Aburrá</p>
                            <br></br>
                            <br></br>
                            <form>
                                <label class="from-label"> Cantidad: </label>
                                <input class="form-control" type="number" value="1"></input>
                                <button type='submit' class="btn btn-warning mt-2 w-100">
                                <i class="bi bi-cart4">Añadir</i>
                                </button>

                            </form>
                        </div> 
                       

                    </div>

                </div>
            </div>

        </>
    )
}