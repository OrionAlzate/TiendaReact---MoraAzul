import './Administrador.css'
import { useState } from 'react'
export function Administrador() {

    const [nombre, setNombre] = useState("")
    const [foto, setFoto] = useState("")
    const [descripcion, setDecripcion] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [precio, setPrecio] = useState("")
    const [clasificacion, setClasificacion] = useState("")
    const [marca, setMarca] = useState("")
    const [proveedor, setProveedor] = useState("")
    const [presentacion, setPresentacion] = useState("")
    const [peso, setPeso] = useState("")
    const [descuento, setDescuento] = useState("")
    const [volumen, setVolumen] = useState("")
    const [fecha_ingreso, setFecha_ingreso] = useState("")
    const [fecha_exp, setFecha_exp] = useState("")

    function procesarFormulario(evento) {
        evento.preventDefault()

        let datosProducto = {
            "nombre": nombre,
            "foto": foto,
            "descripcion": descripcion,
            "cantidad": cantidad,
            "precio": precio,
            "clasificacion": clasificacion,
            "marca": marca,
            "proveedor": proveedor,
            "presentacion": presentacion,
            "peso": peso,
            "descuento": descuento,
            "volumen": volumen,
            "fecha_ingreso": fecha_ingreso,
            "fecha_exp": fecha_exp
        }
        console.log(datosProducto)
    }

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-12 col-lg-5 col-md-5 img_container_admin">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendamoraazul-fba5e.appspot.com/o/logo%20bw.png?alt=media&token=587eb131-e06a-4b86-81cf-5d0762dea3b1" alt="foto" class="img-fluid img_admin" />
                    </div>
                    <div class="col-12 col-lg-7 col-md-7">
                        <h2 class="text-center mb-4">Registro de mercancia</h2>
                        <form class="my-5" onSubmit={procesarFormulario}>
                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-cart"></i>
                                        </span>
                                        <input
                                            id='nombre'
                                            type="text"
                                            class="form-control"
                                            placeholder="Nombre"
                                            onChange={(evento) => {
                                                setNombre(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-camera-fill"></i>
                                        </span>
                                        <input
                                            id='foto'
                                            type="text"
                                            class="form-control"
                                            placeholder="Foto"
                                            onChange={(evento) => {
                                                setFoto(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-cart"></i>
                                        </span>
                                        <textarea
                                            id='descripcion'
                                            type="text"
                                            class="form-control"
                                            placeholder="Description del producto"
                                            onChange={(evento) => {
                                                setDecripcion(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-hash"></i>
                                        </span>
                                        <input
                                            id='cantidad'
                                            type="number"
                                            class="form-control"
                                            placeholder="Cantidad"
                                            onChange={(evento) => {
                                                setCantidad(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-currency-dollar"></i>
                                        </span>
                                        <input
                                            id='precio'
                                            type="number"
                                            class="form-control"
                                            placeholder="Precio"
                                            onChange={(evento) => {
                                                setPrecio(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-card-checklist"></i>
                                        </span>
                                        <input
                                            id='clasificacion'
                                            type="text"
                                            class="form-control"
                                            placeholder="Clasificacion"
                                            onChange={(evento) => {
                                                setClasificacion(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-bookmarks"></i>
                                        </span>
                                        <input
                                            id='marca'
                                            type="text"
                                            class="form-control"
                                            placeholder="Marca"
                                            onChange={(evento) => {
                                                setMarca(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-truck"></i>
                                        </span>
                                        <input
                                            id='proveedor'
                                            type="text"
                                            class="form-control"
                                            placeholder="Proveedor"
                                            onChange={(evento) => {
                                                setProveedor(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-box-seam"></i>
                                        </span>
                                        <input
                                            id='presentacion'
                                            type="text"
                                            class="form-control"
                                            placeholder="Presentación"
                                            onChange={(evento) => {
                                                setPresentacion(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-capslock-fill"></i>
                                        </span>
                                        <input
                                            id='peso'
                                            type="number"
                                            class="form-control"
                                            placeholder="Peso"
                                            onChange={(evento) => {
                                                setPeso
                                                    (evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-cash-coin"></i>
                                        </span>
                                        <input
                                            id='descuento'
                                            type="number"
                                            class="form-control"
                                            placeholder="Descuento"
                                            onChange={(evento) => {
                                                setDescuento(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-box"></i>
                                        </span>
                                        <input
                                            id='volumen'
                                            type="number"
                                            class="form-control"
                                            placeholder="Volumen"
                                            onChange={(evento) => {
                                                setVolumen(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-calendar2-week"></i>
                                        </span>
                                        <input
                                            id='fecha_ingreso'
                                            type="number"
                                            class="form-control"
                                            placeholder="Fecha In"
                                            onChange={(evento) => {
                                                setFecha_ingreso(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-calendar2-week-fill"></i>
                                        </span>
                                        <input
                                            id='fecha_exp'
                                            type="text"
                                            class="form-control"
                                            placeholder="Fecha Exp"
                                            onChange={(evento) => {
                                                setFecha_exp(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="div_btn_enviar text-center ">
                                <button
                                    id='btn_enviar'
                                    type="submit"
                                    class="btn btn-outline-primary ">Enviar...</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}