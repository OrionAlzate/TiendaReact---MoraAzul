import { Route, Routes } from "react-router-dom"
import { Pepe } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu"
import { Tienda } from "../Tienda/Tienda"
import { ApliarInfo } from "../AmpliarInfo/AmpliarInfo"
import { QuienesSomos } from "../QuienesSomos/QuienesSomos"
import { Footer } from '../Footer/Footer'




export function Router() {

  return (
    <>
      <header>
        <Menu></Menu>
      </header>

      <Routes>
        <Route path="/" element={<Pepe />} />
        <Route path="/administrar" element={<Administrador />} />
        <Route path="/productos" element={<Tienda/>}/>
        <Route path="/compras" element={<ApliarInfo/>} />
        <Route path="/quienessomos" element={<QuienesSomos/>} />
      </Routes>
      <br/>
      <br/>
      <Footer/>

    </>

  )

}