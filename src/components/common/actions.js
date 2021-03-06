import axios from "axios";

axios.interceptors.response.use(null, function (error) {
    return Promise.reject(error.response.data || "Ocurrió un error al realizar la acción.");
});

const baseUrl = '';
const port = '';

export const doLoginAsesorado = (email, password) => axios.get(`${baseUrl}/api/asesorados/ingresar?email=${email}&password=${password}`)
    .then(res => res.data);

export const doLoginAsesor = (email, password) => axios.get(`${baseUrl}/api/asesors/ingresar?email=${email}&password=${password}`)
    .then(res => res.data);

export const listShoppings = () => axios.get(`${baseUrl}/api/shoppings`)
    .then(res => res.data)
    .then((shoppings) => {
        const select = shoppings.map(s => ({ label: s.nombre, value: s.id }));
        const list = {};
        shoppings.forEach((s) => list[s.id] = s);
        return { select, list };
    });

export const registrarAsesorado = ({ nombre, apellido, email, fechaNac, password }) => axios.post(
    `${baseUrl}/api/asesorados`,
    { nombre, apellido, email, fechaNac, password }
).then(res => res.data);

export const actualizarAsesorado = ({ id, nombre, apellido, fecha_nacimiento }) => axios.put(`${baseUrl}/api/asesorados/${id}`, {
    nombre, apellido, fecha_nacimiento
}).then(res => res.data);

export const crearAppointment = ({ fechaYHora, asesoradoId, shoppingId }) => axios.post(`${baseUrl}/api/appointments`, {
    fechaYHora,
    asesoradoId,
    shoppingId
}).then(res => res.data);

export const getNextAppointment = (asesoradoId, isAsesor) => axios.get(`${baseUrl}/api/appointments/proximo?usuarioId=${asesoradoId}${isAsesor ? '&isAsesor=true' : '&isAsesor=false'}`)
    .then((res => res.data));

export const cancelAppointment = ({ appointmentId, motivoCancelacion }) => axios.delete(`${baseUrl}/api/appointments/${appointmentId}`, {
    motivoCancelacion
})
    .then((res => res.data));

export function doLoginEmpleado(dni, empresa) {
    return fetch(`${baseUrl}/api/ingresarpaciente?dni=${dni}&nombreEmpresa=${empresa}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
        return response.json();
    }).then((json) => {
        return json;
    })

    /*
    if (dni === '123456' && empresa.toLowerCase() === 'axion') {
        return {
            id: 1,
            dni: '123456',
            rol: 'paciente'
        }
    } else if (dni === '111111' && empresa.toLowerCase() === 'axion') {
        return {
            id: 4,
            dni: '111111',
            rol: 'paciente'
        }
    } else {
        return null
    }
    */
}

export function buscarInasistencia(usuarioId) {
    return fetch(`${baseUrl}/api/visitahoy?codigoPaciente=${usuarioId}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
        return response.json();
    }).then((json) => {
        return json;
    })

    /*
    if (usuarioId === 4) {
        return {
            title: 'Usted ya tiene una notificación ingresada.',
            subtitle: null,
            hour: new Date(),
            address: 'Lima 799, Capital Federal'
        }
    } else {
        return null
    }
    */
}

export function crearInasistencia(idPaciente, motivo) {
    const payload = {
        codigoPaciente: idPaciente,
        descripcionString: motivo
    };

    return fetch(`${baseUrl}/api/solicitarvisita`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*
    return {
        title: '¡Gracias por notificarnos!',
        subtitle: 'El aviso de inasistencia fue informado.',
        hour: new Date(),
        address: 'Lima 799, Capital Federal'
    }
    */
}

export function buscarInasistenciaPorEmpresa(empresaId) {
    return fetch(`${baseUrl}/api/solicitudesvisitaporcliente/${empresaId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*if (empresaId === 3) {
        return {
            data: [
                {
                    nombre: 'Paredes Carlos',
                    descripcion: 'Estoy con dolor de cabeza y mareos.',
                    fecha: new Date(),
                    domicilio: 'Lima 799, Capital Federal'
                },
                {
                    nombre: 'Messi Pedro',
                    descripcion: 'Dolor de panza y vómitos',
                    fecha: new Date(),
                    domicilio: 'Juncal 300, Capital Federal'
                }
            ]
        }
    } else {
        return null
    }*/
}

export function aceptarInasistencia(data) {
    return fetch(`${baseUrl}/api/aprobarsolicitudvisita/${data.codigo}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*console.log(JSON.stringify(data));
    return true*/
}

export function rechazarInasistencia(data) {
    return fetch(`${baseUrl}/api/denegarsolicitudvisita/${data.codigo}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*console.log(JSON.stringify(data));
    return false;*/
}

export function buscarListadoDeSolicitudesPorEmpresa(empresaId) {
    if (empresaId === 3) {
        return {
            data: [
                {
                    id: 1,
                    nombre: 'Paredes Carlos',
                    fecha: new Date(),
                    medico: 'Carlos Gomez',
                    diagnostico: {
                        codigo: 1,
                        descripcion: 'Gripe viral con cuadro febril.'
                    },
                    estado: {
                        codigo: 5,
                        descripcion: 'Visita Otorgada'
                    },
                    codigo_seguimiento: null,
                    formularios_visita: [
                        {
                            id: 2,
                            medico: {
                                nombre: 'Harry Potter'
                            },
                            fecha_visita: new Date(),
                            horario_visita: '20:30',
                            atencion_accidente: null,
                            atencion_enfermedad: 'Esta enfermo mal',
                            otro_motivo: null,
                            estado_visita: {
                                id: 1,
                                descripcion: 'Finalizada'
                            },
                            realizo_control: true,
                            no_realizo_control: null,
                            referencia_domicilio: null,
                            observaciones: null,
                            estado_no_realizo_control: null,
                            reposo: false,
                            deambulaba_en_casa: true,
                            deambulaba_fuera_casa: false,
                            presento_certificacion: true,
                            certificacion: {
                                medico_tratante: 'Otro médico',
                                fecha_certificado: new Date(),
                                mn: '2323232',
                                comentarios: 'Otros comentarios',
                            },
                            tension_arterail: '20',
                            pulso: '12.3',
                            temperatura: '37.8',
                            otros_signos_sintomas: 'Nada raro',
                            diagnostico: 'creo q esta bien',
                            codigo_diagnostico: {
                                id: 3,
                                codigo: '23.230',
                                descripcion: 'Cuadro febril',
                            },
                            justifica_ausencia: true,
                            no_justifica_ausencia: null,
                            enviar_art: null,
                            puede_deambular: true,
                            no_puede_deambular: null,
                            fecha_reincorporacion: new Date()
                        },
                        {
                            id: 1,
                            medico: {
                                nombre: 'Carlos Gomez'
                            },
                            fecha_visita: new Date(),
                            horario_visita: '19:30',
                            atencion_accidente: true,
                            atencion_enfermedad: null,
                            otro_motivo: null,
                            estado_visita: {
                                id: 1,
                                descripcion: 'Imposible Realizar'
                            },
                            realizo_control: null,
                            no_realizo_control: true,
                            referencia_domicilio: 'Ni en pedo me meto ahí',
                            observaciones: 'Esto es una observación',
                            estado_no_realizo_control: {
                                id: 4,
                                descripcion: 'Zona Peligrosa'
                            },
                            reposo: null,
                            deambulaba_en_casa: null,
                            deambulaba_fuera_casa: null,
                            presento_certificacion: null,
                            certificacion: null,
                            tension_arterail: null,
                            pulso: null,
                            temperatura: null,
                            otros_signos_sintomas: null,
                            diagnostico: null,
                            codigo_diagnostico: null,
                            justifica_ausencia: null,
                            no_justifica_ausencia: null,
                            enviar_art: null,
                            puede_deambular: null,
                            no_puede_deambular: null,
                            fecha_reincorporacion: null
                        }
                    ]
                },
                {
                    id: 2,
                    nombre: 'Martin Gomez',
                    fecha: new Date(),
                    medico: null,
                    diagnostico: null,
                    estado: {
                        codigo: 1,
                        descripcion: 'Aceptada'
                    },
                    codigo_seguimiento: null,
                    formularios_visita: [
                        {
                            id: 2,
                            medico: {
                                nombre: 'Carlos Gomez'
                            },
                            fecha_visita: new Date(),
                            horario_visita: '20:30',
                            atencion_accidente: null,
                            atencion_enfermedad: 'Esta enfermo mal',
                            otro_motivo: null,
                            estado_visita: {
                                id: 1,
                                descripcion: 'Finalizada'
                            },
                            realizo_control: true,
                            no_realizo_control: null,
                            referencia_domicilio: null,
                            observaciones: null,
                            estado_no_realizo_control: null,
                            reposo: false,
                            deambulaba_en_casa: true,
                            deambulaba_fuera_casa: true,
                            presento_certificacion: null,
                            certificacion: null,
                            tension_arterail: '20',
                            pulso: '12.3',
                            temperatura: '37.8',
                            otros_signos_sintomas: 'Nada raro',
                            diagnostico: 'creo q esta bien',
                            codigo_diagnostico: {
                                id: 3,
                                codigo: '23.230',
                                descripcion: 'Cuadro febril',
                            },
                            justifica_ausencia: true,
                            no_justifica_ausencia: null,
                            enviar_art: null,
                            puede_deambular: true,
                            no_puede_deambular: null,
                            fecha_reincorporacion: new Date()
                        }
                    ]
                },
                {
                    id: 3,
                    nombre: 'Juan Torres',
                    fecha: new Date(),
                    medico: 'Carlos Gomez',
                    diagnostico: null,
                    estado: {
                        codigo: 2,
                        descripcion: 'Asignada'
                    },
                    codigo_seguimiento: null
                },
                {
                    id: 4,
                    nombre: 'Gustavo Gorriti',
                    fecha: new Date(),
                    medico: 'Carlos Gomez',
                    diagnostico: null,
                    estado: {
                        codigo: 3,
                        descripcion: 'Tomada'
                    },
                    codigo_seguimiento: null
                },
                {
                    id: 5,
                    nombre: 'Ramiro Gonzalez',
                    fecha: new Date(),
                    medico: 'Ramiro Pereyra',
                    diagnostico: {
                        codigo: 2,
                        descripcion: 'Esguince de tobillo grado 3.'
                    },
                    estado: {
                        codigo: 6,
                        descripcion: 'Visita Otorgada con ART'
                    },
                    codigo_seguimiento: '1201/2018'
                }
            ]
        }
    } else {
        return null
    }
}

export function buscarListadoDeSolicitudes() {
    return fetch(`${baseUrl}/api/buscarsolicitudesparabh`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*
    return {
        data: [
            {
                id: 1,
                empresa: 'Axion',
                nombre: 'Amael Carlos',
                domicilio: 'Lima 799 Capital Federal',
                fecha: new Date(),
                estado: {
                    codigo: 1,
                    descripcion: 'Asignada'
                },
                formularios_visita : [
                    {
                        id: 2,
                        medico: {
                            nombre: 'Carlos Gomez'
                        },
                        fecha_visita: new Date(),
                        horario_visita: '20:30',
                        atencion_accidente: null,
                        atencion_enfermedad: 'Esta enfermo mal',
                        otro_motivo: null,
                        estado_visita: {
                            id: 1,
                            descripcion: 'Finalizada'
                        },
                        realizo_control: true,
                        no_realizo_control: null,
                        referencia_domicilio: null,
                        observaciones: null,
                        estado_no_realizo_control: null,
                        reposo: false,
                        deambulaba_en_casa: true,
                        deambulaba_fuera_casa: true,
                        presento_certificacion: true,
                        certificacion: {
                            medico_tratante: 'Otro médico',
                            fecha_certificado: new Date(),
                            mn: '2323232',
                            comentarios: 'Otros comentarios',
                        },
                        tension_arterail: '20',
                        pulso: '12.3',
                        temperatura: '37.8',
                        otros_signos_sintomas: 'Nada raro',
                        diagnostico: 'creo q esta bien',
                        codigo_diagnostico: {
                            id: 3,
                            codigo: '23.230',
                            descripcion: 'Cuadro febril',
                        },
                        justifica_ausencia: true,
                        no_justifica_ausencia: null,
                        enviar_art: null,
                        puede_deambular: true,
                        no_puede_deambular: null,
                        fecha_reincorporacion: new Date()
                    },
                    {
                        id: 1,
                        medico: {
                            nombre: 'Carlos Gomez'
                        },
                        fecha_visita: new Date(),
                        horario_visita: '19:30',
                        atencion_accidente: true,
                        atencion_enfermedad: null,
                        otro_motivo: null,
                        estado_visita: {
                            id: 1,
                            descripcion: 'Imposible Realizar'
                        },
                        realizo_control: null,
                        no_realizo_control: false,
                        referencia_domicilio: 'Ni en pedo me meto ahí',
                        observaciones: 'Esto es una observación',
                        estado_no_realizo_control:{
                            id: 4,
                            descripcion: 'Zona Peligrosa'
                        },
                        reposo: null,
                        deambulaba_en_casa: null,
                        deambulaba_fuera_casa: null,
                        presento_certificacion: null,
                        certificacion: null,
                        tension_arterail: null,
                        pulso: null,
                        temperatura: null,
                        otros_signos_sintomas: null,
                        diagnostico: null,
                        codigo_diagnostico: null,
                        justifica_ausencia: null,
                        no_justifica_ausencia: null,
                        enviar_art: null,
                        puede_deambular: null,
                        no_puede_deambular: null,
                        fecha_reincorporacion: null
                    }
                ]
            },
            {
                id: 2,
                empresa: 'Google',
                nombre: 'Bistir Lionel',
                domicilio: 'Juncal 300 Capital Federal',
                fecha: new Date(),
                estado: {
                    codigo: 6,
                    descripcion: 'Pendiente Llamado ART'
                }
            },
            {
                id: 3,
                empresa: 'Google',
                nombre: 'Carmona Leonardo',
                domicilio: 'Juncal 300 Capital Federal',
                fecha: new Date(),
                estado: {
                    codigo: 7,
                    descripcion: 'Rechazada por médico'
                }
            },
            {
                id: 4,
                empresa: 'UADE',
                nombre: 'Martinez Matias',
                domicilio: 'Juncal 300 Capital Federal',
                fecha: new Date(),
                estado: {
                    codigo: 9,
                    descripcion: 'No Realizada'
                }
            }
        ]
    }
    */
}

export function buscarMedicosDisponibles(solicitud) {
    return fetch(`${baseUrl}/api/medicosparavisita/${solicitud.codigo}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*
    return [
        {
            id: 1,
            nombre: 'Juan Carlos',
            especialidad: 'Clinico'
        },
        {
            id: 2,
            nombre: 'Martin Paredes',
            especialidad: 'Clinico'
        },
        {
            id: 3,
            nombre: 'Juan Domingo',
            especialidad: 'Traumatologo'
        },
        {
            id: 4,
            nombre: 'Pedro Ramirez',
            especialidad: 'Neumologia'
        }
    ]*/
}

export function asignarMedicoASolicitud(medico, solicitud) {
    const payload = {
        codigoMedico: medico.value.codigo,
        codigoSolicitud: solicitud.codigo,
    };

    return fetch(`${baseUrl}/api/asignarmedico`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        return response.json()
    }).then((json) => {
        return json;
    })

    /*if(medico) {
        return true;
    }

    return false;*/
}