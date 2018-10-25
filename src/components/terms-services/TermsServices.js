import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";

class TermsServices extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.location.state.rol === 'shopper') {
            let element = document.getElementById('body');
            element.classList.add('shopper-background');
        }
    }

    componentWillUnmount() {
        let element = document.getElementById('body');
        element.classList.remove('shopper-background');
    }

    render() {
        return (
            <div id="wrapper">
                <Header {...this.props} rol={this.props.location.state.rol || 'user'}
                        logged={true}/>
                <Sidebar {...this.props} rol={this.props.location.state.rol || 'user'}/>
                <div id="page-content-wrapper">
                    <div className='container-fluid'>
                        <div className='document'>
                            <h2>TÉRMINOS Y CONDICIONES</h2>
                            <p>
                                1. Relación contractual
                                Las presentes Condiciones de uso ("Condiciones") regulan el acceso o
                                uso que usted haga, como persona, desde Argentina, desde la
                                aplicación, páginas web, contenido, productos y servicios (los
                                "Servicios") puestos a disposición por Vesti, una sociedad de
                                responsabilidad limitada constituida en Buenos Aires Argentina, con
                                domicilio social en Lima 775 ("Vesti").
                            </p>
                            <p>
                                LEA ESTAS CONDICIONES DETENIDAMENTE ANTES DE ACCEDER O USAR LOS
                                SERVICIOS.
                            </p>
                            <p>
                                Mediante su acceso y uso de los Servicios usted acuerda vincularse
                                jurídicamente por estas Condiciones, que establecen una relación
                                contractual entre usted y Vesti. Si usted no acepta estas
                                Condiciones, no podrá acceder o usar los Servicios. Estas
                                Condiciones sustituyen expresamente los acuerdos o compromisos
                                previos con usted. Vesti podrá poner fin de inmediato a estas
                                Condiciones o cualquiera de los Servicios respecto de usted o, en
                                general, dejar de ofrecer o denegar el acceso a los Servicios o
                                cualquier parte de ellos, en cualquier momento y por cualquier
                                motivo.
                            </p>
                            <p>
                                Se podrán aplicar condiciones suplementarias a determinados
                                Servicios, como políticas para un evento, una actividad o una
                                promoción particular, y dichas condiciones suplementarias se le
                                comunicarán en relación con los Servicios aplicables. Las
                                condiciones suplementarias se establecen además de las Condiciones,
                                y se considerarán una parte de estas, para los fines de los
                                Servicios aplicables. Las condiciones suplementarias prevalecerán
                                sobre las Condiciones en el caso de conflicto con respecto a los
                                Servicios aplicables.
                            </p>
                            <p>
                                Vesti podrá modificar las Condiciones relativas a los Servicios
                                cuando lo considere oportuno. Las modificaciones serán efectivas
                                después de la publicación por parte de Vesti de dichas Condiciones
                                actualizadas en esta ubicación o las políticas modificadas o
                                condiciones suplementarias sobre el Servicio aplicable. Su acceso o
                                uso continuado de los Servicios después de dicha publicación
                                constituye su consentimiento a vincularse por las Condiciones y sus
                                modificaciones.
                            </p>
                            <p>
                                La recopilación y el uso que hacemos de la información personal en
                                relación con los Servicios es conforme se dispone en la Política de
                                privacidad de Vesti, disponible en
                                https://www.vesti.me/terminos-y-condiciones. Vesti podrá facilitar a
                                un procesador de reclamaciones o a una aseguradora cualquier
                                información necesaria (incluida su información de contacto) si
                                hubiera quejas, disputas o conflictos, que pudieran incluir un
                                accidente, implicándole a usted y a un tercero (incluido el
                                prestador particular de servicios de transporte privado) y dicha
                                información o dichos datos fueran necesarios para resolver la queja,
                                la disputa o el conflicto.
                            </p>
                            <p>
                                2. Los Servicios
                                Los Servicios constituyen una plataforma de tecnología que permite a
                                los usuarios de aplicaciones móviles de Vesti o páginas web
                                proporcionadas como parte de los Servicios (cada una, una
                                "Aplicación") organizar y planear el asesoramiento privado con
                                terceros proveedores independientes de dichos servicios, conforme a
                                un acuerdo con Vesti o algunos afiliados de Vesti ("Terceros
                                proveedores"). A no ser que Vesti lo acepte mediante un contrato
                                separado por escrito con usted, los Servicios se ponen a disposición
                                solo para su uso personal, no comercial. USTED RECONOCE QUE VESTI NO
                                PRESTA SERVICIOS DE ASESORAMIENTO DE NINGÚN TIPO NI FUNCIONA COMO
                                UNA EMPRESA DE ASESORAMIENTO Y QUE DICHOS SERVICIOS DE
                                ASESORAMIENTOSE PRESTAN POR TERCEROS PRESTADORES PARTICULARES
                                INDEPENDIENTES, QUE NO ESTÁN EMPLEADOS POR VESTI NI POR NINGUNO DE
                                SUS AFILIADOS.
                            </p>
                            <p>
                                Restricciones.
                                Usted no podrá: (i) retirar cualquier nota de derechos de autor,
                                marca registrada u otra nota de propiedad de cualquier parte de los
                                Servicios; (ii) reproducir, modificar, preparar obras derivadas
                                sobre los Servicios, distribuir, licenciar, arrendar, revender,
                                transferir, exhibir públicamente, presentar públicamente,
                                transmitir, retransmitir o explotar de otra forma los Servicios,
                                excepto como se permita expresamente por Vesti; (iii) descompilar,
                                realizar ingeniería inversa o desmontar los Servicios, excepto como
                                se permita por la ley aplicable; (iv) enlazar, reflejar o enmarcar
                                cualquier parte de los Servicios; (v) causar o lanzar cualquier
                                programa o script con el objeto de extraer, indexar, analizar o de
                                otro modo realizar prospección de datos de cualquier parte de los
                                Servicios o sobrecargar o bloquear indebidamente la operación y/o
                                funcionalidad de cualquier aspecto de los Servicios; o (vi) intentar
                                obtener un acceso no autorizado o dañar cualquier aspecto de los
                                Servicios o sus sistemas o redes relacionados.
                            </p>
                            <p>
                                Prestación de los Servicios.
                                Usted reconoce que partes de los Servicios podrán ponerse a
                                disposición bajo varias marcas u opciones de pedidos de Vesti
                                asociadas con el asesoramiento privado, incluidas las marcas de
                                pedidos de asesoramiento privado actualmente denominadas "Vesti",
                                "Vestime", "Vesti.me", "VestiVIP", "VestiBLACK". Asimismo usted
                                reconoce que los Servicios podrán ponerse a disposición bajo dichas
                                marcas u opciones de pedidos por o en relación con: (i) ciertas
                                subsidiarias o afiliados de Vesti; o (ii) Terceros proveedores
                                independientes.
                            </p>
                            <p>
                                Servicios y contenido de Terceros.
                                Los Servicios podrán ponerse a disposición o ser accesible en
                                relación con servicios y contenido de terceros (incluida la
                                publicidad) que Vesti no controle. Usted reconoce que podrán ser de
                                aplicación diferentes condiciones y políticas de privacidad al uso
                                que haga de dichos servicios y contenido de terceros. Vesti no
                                respalda dichos servicios y contenido de terceros y en ningún caso
                                Vesti será responsable de cualquier producto o servicio de dichos
                                terceros proveedores. Adicionalmente, Apple Inc., Google, Inc.,
                                Microsoft Corporation o BlackBerry Limited y/o sus correspondientes
                                subsidiarias o afiliados internacionales serán terceros
                                beneficiarios en este contrato si usted accede a los Servicios
                                utilizando Aplicaciones desarrolladas para dispositivos móviles con
                                sistema iOS, Android, Microsoft Windows, respectivamente. Estos
                                terceros beneficiarios no son parte de este contrato y no son
                                responsables de la prestación o apoyo de los Servicios de ninguna
                                manera. Su acceso a los Servicios utilizando estos dispositivos se
                                sujeta a las condiciones establecidas en las condiciones de servicio
                                de terceros beneficiarios aplicables.
                            </p>
                            <p>
                                Titularidad.
                                Los Servicios y todos los derechos relativos a estos son y
                                permanecerán de la propiedad de Vesti o de sus licenciantes. Ninguna
                                de estas Condiciones ni su uso de los Servicios le transfieren u
                                otorgan ningún derecho: (i) sobre o en relación con los Servicios,
                                excepto en cuanto a la licencia limitada otorgada anteriormente; o
                                bien (ii) a utilizar o mencionar en cualquier modo a los nombres de
                                empresa, logotipos, nombres de producto y servicio, marcas
                                comerciales o marcas de servicio de Vesti o de sus licenciantes.
                            </p>
                            <p>
                                3. Su uso de los Servicios
                                Cuentas de usuario.
                                Con el fin de usar la mayor parte de los aspectos de los Servicios,
                                usted debe registrarse y mantener activa una cuenta personal de
                                usuario de los Servicios ("Cuenta"). Para obtener una Cuenta debe
                                tener como mínimo 18 años, o tener la mayoría de edad legal en su
                                jurisdicción (si es distinta a los 18 años). El registro de la
                                cuenta le requiere que comunique a Vesti determinada información
                                personal, como su nombre, dirección, número de teléfono móvil, así
                                como por lo menos un método de pago válido (bien una tarjeta de
                                crédito o bien un socio de pago aceptado). Usted se compromete a
                                mantener la información en su Cuenta de forma exacta, completa y
                                actualizada. Si no mantiene la información de Cuenta de forma
                                exacta, completa y actualizada, incluso el tener un método de pago
                                inválido o que haya vencido, podrá resultar en su imposibilidad para
                                acceder y utilizar los Servicios o en la resolución por parte de
                                Vesti de esta Condiciones. Usted es responsable de toda la actividad
                                que ocurre en su Cuenta y se compromete a mantener en todo momento
                                de forma segura y secreta el nombre de usuario y la contraseña de su
                                Cuenta. A menos que Vesti permita otra cosa por escrito, usted solo
                                puede poseer una Cuenta.
                            </p>
                            <p>
                                Requisitos y conducta del usuario.
                                El Servicio no está disponible para el uso de personas menores de 18
                                años. Usted no podrá autorizar a terceros a utilizar su Cuenta,
                                asimismo no podrá permitir a personas menores de 18 años que reciban
                                servicios de asesoramiento privado, a menos que aquellos sean
                                acompañados por usted. No podrá ceder o transferir de otro modo su
                                Cuenta a cualquier otra persona o entidad. Usted acuerda cumplir con
                                todas las leyes aplicables al utilizar los Servicios y solo podrá
                                utilizar los Servicios con fines legítimos. En el uso de los
                                Servicios, no causará estorbos, molestias, incomodidades o daños a
                                la propiedad, tanto al Tercero proveedor como a cualquier otra
                                parte. En algunos casos, se le podrá requerir que facilite un
                                documento de identidad u otro elemento de verificación de identidad
                                para el acceso o uso de los Servicios, y usted acepta que se le
                                podrá denegar el acceso o uso de los Servicios si se niega a
                                facilitar el documento de identidad o el elemento de verificación de
                                identidad.
                            </p>
                            <p>
                                Contenido proporcionado por el Usuario.
                                Vesti podrá, a su sola discreción, permitirle cuando considere
                                oportuno, que envíe, cargue, publique o de otro modo ponga a
                                disposición de Vesti a través de los Servicios contenido e
                                información de texto, audio y/o visual, incluidos comentarios y
                                opiniones relativos a los Servicios, iniciación de peticiones de
                                apoyo, así como presentación de admisiones para competiciones y
                                promociones ("Contenido de usuario"). Todo Contenido de usuario
                                facilitado por usted seguirá siendo de su propiedad. No obstante, al
                                proporcionar Contenido de usuario a Vesti, usted otorga una licencia
                                mundial, perpetua, irrevocable, transferible, libre de regalías, con
                                derecho a sublicenciar, usar, copiar, modificar, crear obras
                                derivadas, distribuir, exhibir públicamente, presentar públicamente
                                o de otro modo explotar de cualquier manera dicho Contenido de
                                usuario en todos los formatos y canales de distribución, conocidos
                                ahora o ideados en un futuro (incluidos en relación con los
                                Servicios y el negocio de Vesti y en sitios y servicios de
                                terceros), sin más aviso o consentimiento de usted y sin requerirse
                                el pago a usted o a cualquier otra persona o entidad.
                            </p>
                            <p>
                                Usted declara y garantiza que: (i) es el único y exclusivo
                                propietario de todo el Contenido de usuario o que tiene todos los
                                derechos, licencias, consentimientos y permisos necesarios para
                                otorgar a Vesti la licencia al Contenido de usuario como establecido
                                anteriormente; y (ii) ni el Contenido de usuario ni su presentación,
                                carga, publicación o puesta a disposición de otro modo de dicho
                                Contenido de usuario, ni el uso por parte de Vesti del Contenido de
                                usuario como está aquí permitido, infringirán, malversarán o
                                violarán la propiedad intelectual o los derechos de propiedad de un
                                tercero o los derechos de publicidad o privacidad o resultarán en la
                                violación de cualquier ley o reglamento aplicable.
                            </p>
                            <p>
                                Usted acuerda no proporcionar Contenido de usuario que sea
                                difamatorio, calumnioso, odioso, violento, obsceno, pornográfico,
                                ilícito o de otro modo ofensivo, como determine Vesti, a su sola
                                discreción, tanto si dicho material pueda estar protegido o no por
                                la ley. Vesti podrá, a su sola discreción y en cualquier momento y
                                por cualquier motivo, sin avisarle previamente, revisar, controlar o
                                eliminar Contenido de usuario, pero sin estar obligada a ello.
                            </p>
                            <p>
                                Acceso a la red y dispositivos.
                                Usted es responsable de obtener el acceso a la red de datos
                                necesario para utilizar los Servicios. Podrán aplicarse las tarifas
                                y tasas de datos y mensajes de su red móvil si usted accede o
                                utiliza los Servicios desde un dispositivo inalámbrico y usted será
                                responsable de dichas tarifas y tasas. Usted es responsable de
                                adquirir y actualizar el hardware compatible o los dispositivos
                                necesarios para acceder y utilizar los Servicios y Aplicaciones y
                                cualquier actualización de estos. Vesti no garantiza que los
                                Servicios, o cualquier parte de estos, funcionen en cualquier
                                hardware o dispositivo particular. Además, los Servicios podrán ser
                                objeto de disfunciones o retrasos inherentes al uso de Internet y de
                                las comunicaciones electrónicas.
                            </p>
                            <p>
                                4. Pago
                                Usted entiende que el uso de los Servicios puede derivar en cargos
                                por los servicios o bienes que reciba de un Tercer proveedor
                                ("Cargos"). Después de que haya recibido los servicios u obtenido
                                los bienes mediante el uso de los Servicios, Vesti facilitará su
                                pago de los Cargos aplicables en nombre del Tercero proveedor como
                                agente de cobro limitado del Tercero proveedor. El pago de los
                                Cargos de dicha manera se considerará como el pago efectuado
                                directamente por usted al Tercero proveedor. Los Cargos incluirán
                                los impuestos aplicables cuando se requiera por ley. Los Cargos
                                pagados por usted son definitivos y no reembolsables, a menos que
                                Vesti determine lo contrario. Usted conserva el derecho de solicitar
                                Cargos más bajos de un Tercero proveedor para los servicios o bienes
                                recibidos por usted de dicho Tercero proveedor en el momento en que
                                reciba dichos servicios o bienes. Vesti responderá en consecuencia a
                                cualquier solicitud de un Tercero proveedor para modificar los
                                Cargos por un servicio o bien en particular.
                            </p>
                            <p>
                                Todos los Cargos son pagaderos inmediatamente y el pago se
                                facilitará por Vesti utilizando al método de pago preferido indicado
                                en su Cuenta, y después de ello Vesti le enviará un recibo por
                                correo electrónico. Si se determina que el método de pago de su
                                Cuenta principal ha caducado, es inválido o de otro modo no sirve
                                para cobrarle, usted acepta que Vesti, como agente de cobro limitado
                                del Tercero proveedor, utilice un método de pago secundario en su
                                Cuenta, si estuviera disponible.
                            </p>
                            <p>
                                Vesti, en cualquier momento y a su sola discreción, se reserva el
                                derecho de establecer, eliminar y/o revisar los Cargos para alguno o
                                todos los servicios o bienes obtenidos a través del uso de los
                                Servicios. Además, usted reconoce y acepta que los Cargos aplicables
                                en determinadas zonas geográficas podrán incrementar sustancialmente
                                durante los periodos de alta demanda. Vesti usará los esfuerzos
                                razonables para informarle de los Cargos que podrán aplicarse,
                                siempre y cuando usted sea responsable de los Cargos incurridos en
                                su Cuenta, independientemente de que usted conozca dichos Cargos o
                                los importes de estos. Vesti podrá, cuando lo considere oportuno,
                                proporcionar a determinados usuarios ofertas promocionales y
                                descuentos que pueden resultar en el cobro de diferentes importes
                                por estos o similares servicios o bienes obtenidos a través del uso
                                de los Servicios, y usted acepta que dichas ofertas promocionales y
                                descuentos, a menos que también se pongan a su disposición, no se
                                tendrán en cuenta en el uso por su parte de los Servicios o los
                                Cargos aplicados a usted. Usted podrá optar por cancelar su
                                solicitud para los servicios o bienes de un Tercero proveedor en
                                cualquier momento antes de la llegada de ese Tercero proveedor, en
                                cuyo caso se le podrá cobrar una tasa de cancelación.
                            </p>
                            <p>
                                Esta estructura de pago está destinada para compensar plenamente al
                                Tercero proveedor por los servicios o bienes proporcionados. Vesti
                                no designa ninguna parte de su pago como propina o gratificación al
                                Tercero proveedor. Cualquier manifestación por parte de Vesti (en la
                                página web de Vesti o en los materiales de marketing de Vesti) en el
                                sentido de que dar una propina es "voluntario", "no requerido", y/o
                                "incluido" en los pagos que realiza para los servicios o bienes
                                proporcionados no pretende sugerir que Vesti proporciona importes
                                adicionales, aparte de los descritos anteriormente, al Tercero
                                proveedor. Usted entiende y acepta que, mientras es libre de
                                proporcionar un pago adicional como gratificación a cualquier
                                Tercero proveedor que le proporcione servicios o bienes obtenidos
                                mediante el Servicios, no tiene obligación de ello. Las
                                gratificaciones son voluntarias. Después de que haya recibido los
                                bienes o servicios obtenidos a través del Servicio, tendrá la
                                oportunidad de calificar su experiencia y dejar comentarios
                                adicionales sobre el Tercero proveedor.
                            </p>
                            <p>
                                5. Renuncias; Limitación de responsabilidad; Indemnidad.
                                RENUNCIA.
                                LOS SERVICIOS SE PROPORCIONAN "TAL CUAL" Y "COMO DISPONIBLES". VESTI
                                RENUNCIA A TODA DECLARACIÓN Y GARANTÍA, EXPRESA, IMPLÍCITA O
                                ESTATUTARIA, NO EXPRESAMENTE ESTABLECIDA EN ESTAS CONDICIONES,
                                INCLUIDAS LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD
                                PARA UN FIN PARTICULAR Y NO VIOLACIÓN. ADEMÁS, VESTI NO HACE
                                DECLARACIÓN NI PRESTA GARANTÍA ALGUNA RELATIVA A LA FIABILIDAD,
                                PUNTUALIDAD, CALIDAD, IDONEIDAD O DISPONIBILIDAD DE LOS SERVICIOS O
                                CUALQUIERA DE LOS SERVICIOS O BIENES SOLICITADOS A TRAVÉS DEL USO DE
                                LOS SERVICIOS, O QUE LOS SERVICIOS NO SERÁN INTERRUMPIDOS O ESTARÁN
                                LIBRES DE ERRORES. VESTI NO GARANTIZA LA CALIDAD, IDONEIDAD,
                                SEGURIDAD O HABILIDAD DE LOS TERCEROS PROVEEDORES. USTED ACUERDA QUE
                                TODO RIESGO DERIVADO DE SU USO DE LOS SERVICIOS Y CUALQUIER SERVICIO
                                O BIEN SOLICITADO EN RELACIÓN CON AQUELLOS SERÁ ÚNICAMENTE SUYO, EN
                                LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE.
                            </p>
                            <p>
                                Indemnidad.
                                Usted acuerda mantener indemnes y responder frente a Vesti y sus
                                consejeros, directores, empleados y agentes por cualquier
                                reclamación, demanda, pérdida, responsabilidad y gasto (incluidos
                                los honorarios de abogados) que deriven de: (i) su uso de los
                                Servicios o servicios o bienes obtenidos a través de su uso de los
                                Servicios; (ii) su incumplimiento o violación de cualquiera de estas
                                Condiciones; (iii) el uso por parte de Vesti de su Contenido de
                                usuario; o (iv) su infracción de los derechos de cualquier tercero,
                                incluidos Terceros proveedores.
                            </p>
                            <p>
                                6. Legislación aplicable; Arbitraje.
                                Salvo que aquí se especifique lo contrario, las presentes
                                Condiciones se regirán e interpretarán exclusivamente en virtud de
                                la legislación de los Países Bajos, con exclusión de sus normas
                                sobre conflicto de leyes. La Convención de Viena sobre los Contratos
                                de Compraventa Internacional de Mercaderías de 1980 (CISG) no se
                                aplicará. Cualquier disputa, conflicto, reclamación o controversia,
                                del tipo que sea, que resulte de las presentes Condiciones o que se
                                relacione en gran parte con ellas, incluyendo las relativas a su
                                validez, interpretación y exigibilidad (cualquier "Disputa"),
                                deberán someterse forzosamente a procedimientos de mediación en
                                virtud del Reglamento de Mediación de la Cámara de Comercio
                                Internacional ("Reglamento de Mediación de la CCI"). Si dicha
                                disputa no fuese solucionada en un plazo de sesenta (60) días desde
                                la fecha en la que se formalice la solicitud de mediación en virtud
                                del Reglamento de Mediación de la CCI, se hará referencia a dicha
                                disputa y se solucionará exclusiva y definitivamente mediante
                                arbitraje en virtud del Reglamento de Arbitraje de la Cámara de
                                Comercio Internacional ("Reglamento de Arbitraje de la CCI"). Las
                                disposiciones sobre Proceso Expedito y del Árbitro de Emergencia del
                                Reglamento de la CCI no se aplicarán. La disputa será resuelta por
                                un (1) árbitro nombrado a tal fin en virtud del Reglamento de la
                                CCI. El lugar tanto para la mediación como para el arbitraje será
                                Ámsterdam, Países Bajos, sin perjuicio de cualquier derecho que
                                usted pudiera tener según el artículo 18 del Reglamento Brussels I
                                bis (OJ EU 2012 L351/1) y/o el artículo 6:236n del Código Civil
                                holandés. El idioma de mediación y/o arbitraje será el inglés, a no
                                ser que usted no hable inglés, en cuyo caso la mediación y/o el
                                arbitraje se llevarán a cabo en inglés y en su idioma materno. La
                                existencia y el contenido de los procedimientos de mediación y
                                arbitraje, incluidos los documentos e informes presentados por las
                                partes, la correspondencia de la CCI, la correspondencia del
                                mediador y la correspondencia, los pedidos y los laudos emitidos por
                                el único árbitro deberán permanecer en estricta confidencialidad y
                                no deberán ser revelados a ningún tercero sin el consentimiento
                                expreso por escrito de la otra parte, a menos que: (i) la revelación
                                al tercero sea razonablemente necesaria para llevar a cabo el
                                procedimiento de mediación o arbitraje; y (ii) el tercero acepte
                                incondicionalmente por escrito estar sujeto a la obligación de
                                confidencialidad estipulada en el presente documento.
                            </p>
                            <p>
                                7. Otras disposiciones
                                Las reclamaciones por infracción de derechos de autor deberán
                                enviarse al agente designado de Vesti. Visite la página web de Vesti
                                en https://www.vesti.me/terminos-y-condiciones para obtener las
                                direcciones designadas e información adicional.
                            </p>
                            <p>
                                Notificaciones.
                                Vesti podrá notificar por medio de una notificación general en los
                                Servicios, mediante un correo electrónico enviado a su dirección
                                electrónica en su Cuenta o por comunicación escrita enviada a su
                                dirección, según lo dispuesto en su Cuenta.
                            </p>
                            <p>
                                Disposiciones generales.
                                No podrá ceder ni transferir estas Condiciones, en todo o en parte,
                                sin el consentimiento previo por escrito de Vesti. Usted da su
                                aprobación a Vesti para ceder o transferir estas Condiciones, en
                                todo o en parte, incluido a: (i) una subsidiaria o un afiliado; (ii)
                                un adquirente del capital, del negocio o de los activos de Vesti; o
                                (iii) un sucesor por fusión. No existe entre usted, Vesti o
                                cualquier Tercer proveedor una empresa conjunta o relación de
                                socios, empleo o agencia como resultado del contrato entre usted y
                                Vesti o del uso de los Servicios.
                            </p>
                            <p>
                                Si cualquier disposición de estas Condiciones se considerara ilegal,
                                nula o inexigible, ya sea en su totalidad o en parte, de conformidad
                                con cualquier legislación, dicha disposición o parte de esta se
                                considerará que no forma parte de estas Condiciones, aunque la
                                legalidad, validez y exigibilidad del resto de las disposiciones de
                                estas Condiciones no se verá afectada. En ese caso, las partes
                                deberán reemplazar dicha disposición ilegal, nula o inexigible, en
                                todo o en parte por una disposición legal, válida y exigible que
                                tenga, en la medida de lo posible, un efecto similar al que tenía la
                                disposición ilegal, nula o inexigible, dados los contenidos y el
                                propósito de estas Condiciones. Estas Condiciones constituyen el
                                contrato íntegro y el entendimiento entre las partes en relación con
                                el objeto y sustituye y reemplaza a todos los contratos o acuerdos
                                anteriores o contemporáneos en relación con dicho objeto. En estas
                                Condiciones, las palabras "incluido/a/os/as" e "incluye/n"
                                significan "incluido, de forma meramente enunciativa".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TermsServices;
