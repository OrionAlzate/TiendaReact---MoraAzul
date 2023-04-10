import './Tienda.css'
import { Link } from "react-router-dom"

export function Tienda() {

    function cambiarFoto(evento) {
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }
    function cambiarFoto2(evento) {
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }

    let productos = [
        {
            "nombre": "Pulseras",
            "precio": 8000,
            "descripcion": "pulseras hechas en macramé elaboradas a mano",
            "foto": "https://i.pinimg.com/736x/6e/e9/a3/6ee9a3781fcf6e91f3c760cf537646bc.jpg"
        },
        {
            "nombre": "Anillos",
            "precio": 15000,
            "descripcion": "Anillos hechos en macramé elaboradas a mano",
            "foto": "https://cdn.wallapop.com/images/10420/cr/18/__/c10420p771001876/i2556344118.jpg?pictureSize=W640"
        },
        {
            "nombre": "Aretes",
            "precio": 12000,
            "descripcion": "Aretes hechos en macramé elaboradas a mano",
            "foto": "https://cdn.shopify.com/s/files/1/0021/4597/6395/articles/IMG-20210903-WA0004_1600x.jpg?v=1635208442"
        },
        {
            "nombre": "Llavero",
            "precio": 8000,
            "descripcion": "Llaveros hechos en macramé elaboradas a mano",
            "foto": "https://i.pinimg.com/originals/45/f7/fd/45f7fd677b2b4f9bbf68d04824148c19.jpg"
        },
        {
            "nombre": "Cortina",
            "precio": 80000,
            "descripcion": "Cortina hecha en macramé elaboradas a mano",
            "foto": "https://statics.venca.com/web/img/products/062979_539545_PV_DF_FR_20220309112725_1_l.jpg"
        },
        {
            "nombre": "Bolso",
            "precio": 45000,
            "descripcion": "Bolso hecha en macramé elaboradas a mano",
            "foto": "https://1.bp.blogspot.com/-3LixJ95aQqw/XI_TsD5G6BI/AAAAAAAAAnk/OTMsweSlad4hhaylsYVSeKSUXd_xfXgPgCLcBGAs/s1600/0bf2b85e48808dfb762265bfb5f190bc.jpg"
        },
        {
            "nombre": "Vestido de dos piezas",
            "precio": 90000,
            "descripcion": "Vestido de dos piezas hecho en macramé elaboradas a mano",
            "foto": "https://http2.mlstatic.com/D_NQ_NP_822936-MCO49905890194_052022-W.jpg"
        },
        {
            "nombre": "Vestido de Baño",
            "precio": 60000,
            "descripcion": "Vestido de baño de dos piezas hecho en macramé elaboradas a mano",
            "foto": "https://cdn.shopify.com/s/files/1/0574/4089/5139/products/image_309a17b3-de93-4823-99d2-d369c85200d5_900x.jpg?v=1648447334"
        },
        {
            "nombre": "Porta Materas",
            "precio": 30000,
            "descripcion": "Porta Materas hecho en macramé elaboradas a mano",
            "foto": "https://pilui.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-25-at-4.30.18-PM.jpeg"
        },
        {
            "nombre": "Falda",
            "precio": 45000,
            "descripcion": "Falda hecha en macramé elaboradas a mano",
            "foto": "https://i.pinimg.com/236x/7e/95/cf/7e95cf4341885c9edecc3b5c92a90783.jpg"
        }
    ]

    return (
        <>
            <br></br>
            <br></br>
            <br></br>

            <div class="w-100 container">
                <div class="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-3 mt-5 producto_container ">
                    {
                        productos.map(function (producto) {
                            return (
                                <div class="col zoom ">
                                    <Link class="link_prod" to="/compras">
                                    <div class="card h-100 shadow div_productos d-flex flex-wrap justify-content-center">
                                        <img
                                            src={producto.foto}
                                            alt="Producto"
                                            class="img-fluid img_producto sombra"
                                            onMouseOver={cambiarFoto}
                                            onMouseLeave={cambiarFoto2}
                                        // onClick={}
                                        />
                                        
                                            <h2>{producto.nombre}</h2>
                                        <p class="descripcion_producto">{producto.descripcion}</p>
                                        <h5 class="precio_producto">${producto.precio} COP</h5>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}