import React, { Component } from 'react';
import Header from '../common/Header';
import { getStorage, removeStorage } from '../common/storage';
import {
    buscarListadoDeSolicitudes, buscarMedicosDisponibles, asignarMedicoASolicitud
} from '../common/actions';
import Moment from 'moment/min/moment-with-locales';

class ListadoSolicitudesBH extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cargando: true,
            cargandoModal: false,
            error: false,
            filterKey: '',
            dataToShow: null,
            data: null,
            filtered: false,
            showFormModal: false,
            showARTModal: false,
            showMedicModal: false,
            modalError: null,
            selectedMedic: null,
            availableMedics: [],
            selectedForm: null,
            listForms: []
        };
    }

    componentWillMount() {
        const session = JSON.parse(getStorage('session'));

        if (!session || (session && session.rol !== 'admin')) {
            removeStorage('session');
            this.props.history.push('/');
        }

        this.data = null;

        return buscarListadoDeSolicitudes()
            .then((resp) => {
                this.setState({data: resp, dataToShow: resp, cargando: false, error: null})
            })
            .catch((err) => {
                console.log(err);
                this.setState({cargando: false, error: err});
            });
    }

    renderData() {
        const dataToShow = [];
        if(this.state.dataToShow) {
            this.state.dataToShow.map((value, index) => {
                if(value.estado.nombre !== 'Iniciada' && value.estado.nombre !== 'Rechazada') {
                    return dataToShow.push(
                        <tr key={index}>
                            <td>{value.paciente.cliente.razon_social}</td>
                            <td>{value.paciente.nombre_yapellido}</td>
                            <td>{value.paciente.direccion + ', ' + value.paciente.localidad.nombre}</td>
                            <td>{Moment(value.fecha).locale('es').format('DD/MM HH:mm')}</td>
                            <td>{value.estado.nombre}</td>
                            <td>
                                <a onClick={()=>this.handleShowFormModal(value)}>Ver Formulario</a>
                                {
                                    (value.estado.nombre === 'Pendiente de llamado ART') &&
                                    <a onClick={()=>this.handleShowARTModal(value)}> | Derivar ART</a>
                                }
                                {
                                    (value.estado.nombre === 'Aceptada' || value.estado.nombre === 'Rechazada Por Médico' || value.estado.nombre === 'No Realizada') &&
                                    <a onClick={()=>this.handleShowMedicModal(value)}> | Asignar Médico</a>
                                }
                            </td>
                        </tr>
                    )
                }
            });
        }
        return dataToShow;
    }

    filterGrid() {
        if(this.state.data && this.state.filterKey) {
            const filteredData = [];
            const filter = this.state.filterKey;
            this.state.data.map((value)=>{
                if((value.paciente.nombre_yapellido.toLowerCase().includes(filter)) || (value.paciente.cliente.razon_social.toLowerCase().includes(filter))) {
                    filteredData.push(value);
                }
            });

            return this.setState({dataToShow: filteredData, filtered: true});
        } else {
            this.resetFilter();
        }
    }

    resetFilter() {
        return this.setState({dataToShow: this.state.data, filtered: false, filterKey: ''});
    }

    handleClose() {
        this.setState({ showFormModal: false, showARTModal: false, showMedicModal: false, selectedMedic: null, modalError: null });
    }

    handleShowFormModal(value) {
        this.currentItem = value;
        let currentForm = null;
        if(this.currentItem) {
            const items = [];
            if(this.currentItem.visitas_medicas && this.currentItem.visitas_medicas.length > 0) {
                currentForm = {
                    value: this.currentItem.visitas_medicas[0],
                    label: this.currentItem.visitas_medicas[0].codigo + ' - ' + this.currentItem.visitas_medicas[0].estado.nombre
                };
                this.currentItem.visitas_medicas.map((item)=> {
                    items.push(
                        {
                            value: item,
                            label: item.codigo + ' - ' + item.estado.nombre
                        }
                    );
                });
            }
            return this.setState({ showFormModal: true, listForms: items, selectedForm: currentForm });
        }
        return this.setState({ showFormModal: true, listForms: [], selectedForm: currentForm });
    }

    handleShowARTModal(value) {
        this.currentItem = value;
        this.setState({ showARTModal: true });
    }

    handleShowMedicModal(value) {
        this.currentItem = value;

        this.setState({cargandoModal: true, showMedicModal: true}, () => {
            buscarMedicosDisponibles(this.currentItem)
                .then((resp) => {
                    if(resp) {
                        const items = [];
                        resp.map((item)=> {
                            items.push(
                                {
                                    value: item,
                                    label: item.nombre_yapellido + ' (' + item.especialidad.nombre + ')'
                                }
                            );
                        });
                        return this.setState({ availableMedics: items, cargandoModal: false, modalError: ( resp.length < 1 ) ? 'No hay médicos disponibles, intente más tarde.' : null });
                    } else {
                        return this.setState({ availableMedics: [], modalError: 'Algo salío mal, intente más tarde', cargandoModal: false });
                    }
                })
                .catch((err) => {
                    this.setState({error: 'Algo salío mal, intente más tarde', showMedicModal: false, cargandoModal: false});
                    console.log(err);
                })
        });
    }

    asignarMedico() {
        if(this.state.selectedMedic) {
            this.setState({cargandoModal: true}, () => {
                asignarMedicoASolicitud(this.state.selectedMedic, this.currentItem)
                    .then((resp) => {
                        if(resp && resp !== 'El médico no existe') {
                            this.currentItem = null;
                            this.handleClose();
                            return window.location.reload()
                        } else {
                            this.setState({modalError: 'Algo salío mal, intente más tarde', cargandoModal: false});
                        }
                    })
                    .catch((err) => {
                        this.setState({modalError: 'Algo salío mal, intente más tarde', cargandoModal: false});
                        console.log(err);
                    })
            });
        } else {
            this.setState({modalError: 'Debe seleccionar un médico'});
        }
    }

    render() {
        return (
            <div>
                <Header {...this.props} rol={'admin'} logged={true}/>
                <div className='container'>
                        <div className='routeName'>
                            Listado de Solicitudes
                        </div>
                </div>
            </div>
        );
    }
}

export default ListadoSolicitudesBH;
