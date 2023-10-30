import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import CargarSeriesForm from './CargarSeriesForm';
import CargarPersonajesForm from './CargarPersonajesForm';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {
  state = {
    status: false,
    serie: ""
  }

  cajaSerie = React.createRef();
  cajaPersonaje = React.createRef();

  modificarPersonaje = (e) => {
    e.preventDefault();

    var serie = parseInt(this.cajaSerie.current.value);
    var personaje = parseInt(this.cajaPersonaje.current.value);

    var request = "api/Personajes/" + personaje + "/" + serie
    var url = Global.apiSeries + request;

    axios.put(url).then(response => {
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
            <Navigate to={"/personajes/" + this.state.serie} />
          )
        }
        <h1 className='text-center'>Modificar Personaje</h1>
        <form style={{ width: "500px", margin: "auto" }}>
          <label>Serie: </label>
          <select ref={this.cajaSerie} className="form-select">
            <CargarSeriesForm />
          </select>
          <label>Personaje: </label>
          <select ref={this.cajaPersonaje} className="form-select">
            <CargarPersonajesForm />
          </select>
          <br></br>
          <div className='text-end'>
            <button onClick={this.modificarPersonaje} className='btn btn-outline-success '>Crear</button>
          </div>

        </form>
      </div>
    )
  }
}
