import React, { Component } from 'react'
import fondo from './assets/images/fondo.jpg'

export default class Home extends Component {
  render() {
    return (
      <img src={fondo} width={"100%"}></img>
    )
  }
}
