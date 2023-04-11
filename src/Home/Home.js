import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'
import { Features } from '../Features/Features'
import { Footer } from '../Footer/Footer'

export function Pepe(){
    return(
        <>
            <section>
                <div class="banner">
                 
                </div>
            </section>
            <AcercaDe></AcercaDe>
            <Servicios></Servicios>
            <Features></Features>
            <Footer/>
        </>
    )
}