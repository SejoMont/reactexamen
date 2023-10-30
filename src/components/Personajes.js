import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Personajes extends Component {
    state = {
        personajes: []
    }

    loadPersonajes = () => {
        var request = "api/Series/PersonajesSerie/" + this.props.idserie;
        var url = Global.apiSeries + request;

        axios.get(url).then(response => {
            this.setState({
                personajes: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadPersonajes();
    }

    render() {
        return (
            <div className=''>
                <NavLink to={"/serie/" + this.props.idserie} className="btn btn-outline-info">Volver a la Serie</NavLink>
                <table className='table table-striped text-center'>
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.personajes.map((personaje, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{personaje.nombre}</td>
                                        <td><img style={{ width: "125px" }} src={personaje.imagen} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
