import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";

class TermsServices extends Component {
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
                            <h2>Términos y condiciones</h2>
                            <p>
                                Los siguientes términos de uso abarcan el uso del sistema PedidosYa
                                y de sus servicios ofrecidos; al utilizar nuestro sitio, usted
                                acepta estos términos completamente siendo estos de carácter
                                obligatorio. Si no está de acuerdo con estos términos de uso, alguna
                                parte de ellos, o las políticas y principios que se adhieren, usted
                                no debe utilizar nuestro sitio.

                                Usted debe leer, entender y aceptar todas las condiciones
                                establecidas en los Términos y Condiciones y en las Políticas de
                                Privacidad así como en los demás documentos incorporados a los
                                mismos por referencia, previa su inscripción como usuario registrado
                                en PedidosYa.
                            </p>
                            <p>
                                A no ser que se establezca lo contrario, nosotros somos dueños de
                                los derechos de propiedad intelectual y material del sitio. Sujeto a
                                la licencia debajo, todos estos derechos de propiedad intelectual
                                están reservados. Usted puede mirar, descargar, copiar e imprimir
                                las páginas del sitio para su propio uso personal, sujeto a las
                                restricciones establecidas debajo y en otras secciones de estos
                                términos de uso.
                            </p>
                            <p>
                                - Republicar material de este sitio web (incluido re publicaciones
                                en otro sitio web).
                                - Vender, alquilar o sub-licenciar material de este sitio web.
                                - Mostrar cualquier material restringido de este sitio web
                                públicamente (incluye correos electrónicos de profesionales o
                                empresas publicados, información estadística del sitio, y todo
                                material únicamente disponible para determinado tipo de usuario).
                                - Editar o modificar cualquier material del sitio a no ser que sea
                                de su pertenencia.
                                - Cuando el contenido esté específicamente disponible para la
                                redistribución, solo puede ser redistribuido dentro de su
                                organización.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TermsServices;
