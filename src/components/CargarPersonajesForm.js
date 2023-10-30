import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class CargarPersonajesForm extends Component {
    state = {
        personajes: []
    }

    loadPersonajes = () => {
        var request = "api/Personajes";
        var url = Global.apiSeries + request;

        axios.get(url).then((response) => {
            this.setState({
                personajes: response.data
            })
        })
    };

    componentDidMount = () => {
        this.loadPersonajes();
    }

    render() {
        return this.state.personajes.map((personaje, index) => (
            <option key={index} value={personaje.idPersonaje}>
                {personaje.nombre}
            </option>
        ));
    }
}
