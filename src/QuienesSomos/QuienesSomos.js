import './QuienesSomos.css'


export function QuienesSomos() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="contenedor_quienesSomos">
                <h1 class="titulo_Quienes">Quienes somos:</h1>
                <br></br>
                <img class="img_estefa" src='https://static.vecteezy.com/system/resources/previews/014/212/681/non_2x/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg' />
                <img class="img_orion" src='https://img.freepik.com/iconos-gratis/hombre_318-860789.jpg' />
                <p><b>
                    Somos Estefania Jaramillo Zea y Orion Alzate, dos desarrolladores de software del CESDE a punto de graduarse.
                </b></p>

                <p><b>Este es nuestro proyecto final realizado con la tecnoogía React.JS el cual se compone de un sitio Web Single Page Application basado en una tienda virtual del proyecto de emprendimiento llamado Mora Azul Accesorios de propiedad de Estefanía Jaramillo
                </b></p>
                <br></br>
                <br></br>

                <div class="contenedor_github">
                    <p>
                        <b>
                            Te invitamos a conocer un poco más de nosotros:
                        </b>
                    </p>

                    <a class="github_estefa" target="_blank" href='https://github.com/EsJaZe'>
                        <i class="bi bi-github github_estefa_i"> GitHub Estefanía

                        </i>
                    </a>

                    <a class="github_orion" target="_blank" href='https://github.com/OrionAlzate'>

                        <i class="bi bi-github github_orion_i"> GitHub Orion
                        </i>

                    </a>
                </div>

            </div>

        </>
    )
}