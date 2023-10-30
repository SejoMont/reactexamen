import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from './assets/images/strangerThings.png'
import CargarSeries from './CargarSeries';

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} width="70"></img>
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                            {/* <span className=""> <img src="https://cdn0.iconfinder.com/data/icons/gray-business-toolbar/512/hamburger-3-512.png" width="40px"></img></span> */}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/nuevopersonaje">
                                        Nuevo Personaje
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/modificarpersonaje">
                                        Modificar Personaje
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDarkDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Series
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu"
                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                    >
                                        <CargarSeries />
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
