import React from 'react'
import { Valores } from '../models/valores'

export default function ResultadoC(props:Valores) {

  return (
    <div>
      <ul>
        <li>Valor Inicial: <strong>{props.medidaC}</strong> grados celcius</li>
        <li>Conversiones:</li>
        <li><strong>{props.medidaF}</strong> grados Farenheit</li>
        <li><strong>{props.medidaK}</strong> grados Kelvin</li>
      </ul>
    </div>
  )
}
