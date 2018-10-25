import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";

class Privacy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={'user'} logged={true}/>
                <Sidebar {...this.props} rol={'user'}/>
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className='document'>
                            <h2>Politicas de privacidad</h2>
                            <p>
                                ¿Qué información recolectamos?:
                                - Información acerca de su computadora, y acerca de sus visitas y
                                uso de este sitio web incluyendo su dirección IP, locación
                                geográfica, tipo de navegador, fuente de referencia al sitio,
                                duración de las visitas y número de vistas por página.
                                - Información que usted nos provea para el propósito del registro en
                                nuestro sitio web incluyendo email, nombre, apellido, lugar y país
                                de residencia, dirección, teléfono, avatar y contraseña de ingreso
                                al sitio.
                                - Cualquier otra información que usted elija enviarnos a nosotros.
                            </p>
                            <p>
                                Visibilidad de los datos:
                                El nombre de usuario y avatar será visible en caso de que un usuario
                                realice un comentario a un restaurante particular. PedidosYa puede
                                mostrar el nombre del usuario con su nuevo registro y su último
                                pedido a un local en la sección Actividad Reciente de nuestro sitio
                                web.
                            </p>
                            <p>
                                Cookies:
                                Una cookie consiste en información enviada por un servidor web a un
                                navegador web, y almacenada por el navegador. La información es
                                luego enviada de nuevo al servidor en cada momento que el navegador
                                solicita una página del servidor. Esto habilita al servidor a
                                identificar y rastrear el navegador web. Nosotros usaremos tanto
                                cookies de sesión como cookies persistentes en el sitio web.

                                Usaremos las cookies de sesión para estar al tanto de usted mientras
                                navega por el sitio. Usaremos cookies persistentes para habilitar a
                                nuestro sitio web que lo reconozca a usted cuando visita nuestro
                                sitio. Las cookies de sesión serán eliminadas de su computadora
                                cuando usted cierra el navegador web. Las cookies persistentes se
                                mantendrán almacenadas en su computadora hasta que sean eliminadas,
                                o hasta que lleguen a una fecha de expiración especificada.

                                Utilizamos Google Analytics para analizar el uso de este sitio web.
                                Google Analytics genera información estadística y de otro tipo sobre
                                el uso de sitios web mediante cookies, las cuales son almacenadas en
                                la computadora del usuario. La información generada en relación con
                                nuestro sitio web es utilizada para crear reportes sobre el uso de
                                nuestro sitio. Google almacenará esta información.

                                Las políticas de privacidad de Google se encuentran disponibles en:
                                http://www.google.com/privacypolicy.html

                                La mayoría de los navegadores web lo autorizan a usted a rechazar la
                                aceptación de cookies. Esto se logra a través de la configuración de
                                cada navegador en particular. Esto sin embargo, tendrá un impacto
                                negativo con respecto a la usabilidad de varios sitios web
                                incluyendo este.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Privacy;
