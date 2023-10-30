import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import CargarSeriesForm from './CargarSeriesForm';
import { Navigate } from 'react-router-dom';

export default class NuevoPersonaje extends Component {
    state = {
        status: false,
        serie : ""
    }

    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSerie = React.createRef();

    crearPersonaje = (e) => {
        e.preventDefault();

        var nombre = this.cajaNombre.current.value;
        var imagen = this.cajaImagen.current.value;
        var serie = parseInt(this.cajaSerie.current.value);

        var personaje = {
            idPersonaje: 0,
            nombre: nombre,
            imagen: imagen,
            idSerie: serie
        }

        var request = "api/Personajes"
        var url = Global.apiSeries + request;

        axios.post(url, personaje).then(response => {
            this.setState({
                status: true,
                serie: serie,
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status == true && (
                        <Navigate to={"/personajes/"+ this.state.serie} />
                    )
                }
                <h1 className='text-center'>Nuevo Personaje</h1>
                <form style={{ width: "500px", margin: "auto" }}>
                    <label>Nombre: </label>
                    <input type='text' ref={this.cajaNombre} className="form-control" />
                    <label>Imagen: </label>
                    <input type='text' ref={this.cajaImagen} className="form-control" />
                    <label>Serie: </label>
                    <select ref={this.cajaSerie} className="form-select">
                        <CargarSeriesForm />
                    </select>
                    <br></br>
                    <div className='text-end'>
                        <button onClick={this.crearPersonaje} className='btn btn-outline-success '>Crear</button>
                    </div>

                </form>
            </div>
        )
    }
}
