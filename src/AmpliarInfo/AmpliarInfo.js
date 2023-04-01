import './AmpliarInfo.css'
// import {Tienda} from '../Tienda/Tienda.js'




export function ApliarInfo() {

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <img
                            src="https://i.pinimg.com/736x/6e/e9/a3/6ee9a3781fcf6e91f3c760cf537646bc.jpg"
                            class="w-100 img-fluid"
                            alt="fotoEjemplo"
                        />
                    </div>
                    <div class="col-12 col-md-5 border p-3 rounded shadow ">
                        <h2 class="fw-bold">Pulseras</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Más vendido</span>
                        <br></br>
                        <br></br>
                        <h3>$8000</h3>
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