import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetalleSerie extends Component {
    state = {
        serie: []
    }

    findSerie = () => {
        var request = "api/Series/" + this.props.idserie;
        var url = Global.apiSeries + request;

        axios.get(url).then(response => {
            this.setState({
                serie: response.data
            })
            console.log(url)
        })
    }

    componentDidMount = () => {
        this.findSerie();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps !== this.props) {
            this.findSerie();
        }
    }

    render() {
        return (
            <div className='text-center'>
                <ul className='list-group'>
                    <li className='list-group-item'><h1>{this.state.serie.nombre}</h1></li>
                    <li className='list-group-item'><img src={this.state.serie.imagen} style={{ width: "200px" }} /></li>
                    <li className='list-group-item'><h2>Puntuacion: {this.state.serie.puntuacion}</h2></li>
                    <li className='list-group-item'><h2>Año: {this.state.serie.anyo}</h2></li>
                    <li className='list-group-item'>
                        <NavLink className="btn btn-outline-success" to={"/personajes/" + this.state.serie.idSerie}>Personajes</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
