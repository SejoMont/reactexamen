import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import CargarSeriesForm from './CargarSeriesForm';
import CargarPersonajesForm from './CargarPersonajesForm';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {
  state = {
    status: false,
    statusSerie: false,
    statusPersonaje: false,
    serie: "",
    serieSelecionada: [],
    personajeSeleccionado: [],
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

  serieSeleccionada = () => {
    var request = "api/Series/" + parseInt(this.cajaSerie.current.value);
    var url = Global.apiSeries + request;

    axios.get(url).then(response => {
      this.setState({
        serieSelecionada: response.data,
        statusSerie: true,
      })
    })
  }

  personajeSeleccionado = () => {
    var request = "api/Personajes/" + parseInt(this.cajaPersonaje.current.value);
    var url = Global.apiSeries + request;

    axios.get(url).then(response => {
      this.setState({
        personajeSeleccionado: response.data,
        statusPersonaje: true,
      })
    })
  }

  render() {
    return (
      <div style={{ width: "500px", margin: "auto" }}>
        {
          this.state.status == true && (
            <Navigate to={"/personajes/" + this.state.serie} />
          )
        }

        <h1 className='text-center'>Modificar Personaje</h1>

        <form>
          <label>Serie: </label>
          <select ref={this.cajaSerie} className="form-select" onChange={this.serieSeleccionada}>
            <CargarSeriesForm />
          </select>
          <label>Personaje: </label>
          <select ref={this.cajaPersonaje} className="form-select" onChange={this.personajeSeleccionado}>
            <CargarPersonajesForm />
          </select>
          <br></br>
          <div className='text-end'>
            <button onClick={this.modificarPersonaje} className='btn btn-outline-success '>Crear</button>
          </div>
        </form>

        {
          this.state.statusSerie == true && (
            <div>
              <h1>{this.state.serieSelecionada.nombre}</h1>
              <img src={this.state.serieSelecionada.imagen} width={"500px"}></img>
            </div>
          )
        }

        {
          this.state.statusPersonaje == true && (
            <div>
              <h1>{this.state.personajeSeleccionado.nombre}</h1>
              <img src={this.state.personajeSeleccionado.imagen} width={"500px"}></img>
            </div>
          )
        }
      </div>
    )
  }
}
