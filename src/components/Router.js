import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Home from './Home';
import MenuRutas from './MenuRutas';
import DetalleSerie from './DetalleSerie';
import Personajes from './Personajes';
import NuevoPersonaje from './NuevoPersonaje';
import ModificarPersonaje from './ModificarPersonaje';

export default class Router extends Component {
    render() {
        function DetallesSerieElement() {
            var { idserie } = useParams();

            return <DetalleSerie idserie={idserie} />;
        }
        function PersonajesElement() {
            var { idserie } = useParams();

            return <Personajes idserie={idserie} />;
        }

        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/serie/:idserie" element={<DetallesSerieElement />}></Route>
                    <Route path="/personajes/:idserie" element={<PersonajesElement />}></Route>
                    <Route path="/nuevopersonaje" element={<NuevoPersonaje />}></Route>
                    <Route path="/modificarpersonaje" element={<ModificarPersonaje />}></Route>
                    {/* <Route path="*" element={</>}></Route> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
