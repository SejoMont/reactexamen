import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class CargarSeries extends Component {
    state = {
        series: []
    }

    loadSeries = () => {
        var request = "api/Series";
        var url = Global.apiSeries + request;

        axios.get(url).then((response) => {
            this.setState({
                series: response.data
            })
        })
    };

    componentDidMount = () => {
        this.loadSeries();
    }

    render() {
        return this.state.series.map((serie, index) => (
            <li key={index} className="dropdown-item">
                <NavLink to={`serie/${serie.idSerie}`} className="dropdown-item">
                    {serie.nombre}
                </NavLink>
            </li>
        ));
    }
}
