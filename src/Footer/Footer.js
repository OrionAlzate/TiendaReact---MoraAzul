import './Footer.css'
export function Footer() {
    return (
        <>
            <div class="footer">
                <div class="map_footer">
                    <div class="map_footer_container">
                        <h4>Mapa del Sitio</h4>
                        <br/>
                        <p>Home</p>
                        <p>Agregar Productos</p>
                        <p>Productos</p>
                    </div>

                </div>
                <div class="contact_footer">
                    <h4>Contáctenos</h4>
                    <br/>
                    <p>Mail: moraazul@mimail.com</p>
                    <p>Tel: +57 321 6549877</p>
                </div>
                <div class="redes_footer">
                    <h4>Redes Sociales</h4>
                    <br/>
                    <div class="redes_icons">
                        <i class="bi bi-facebook"></i>     
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-tiktok"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-github"></i>
                        <i class="bi bi-discord"></i>
                    </div>
                </div>
            </div>
        </>
    )
}