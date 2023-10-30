import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class CargarSeriesForm extends Component {
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
            <option key={index} value={serie.idSerie}>
                {serie.nombre}
            </option>
        ));
    }
}
