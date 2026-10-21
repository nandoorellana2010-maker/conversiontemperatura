import React from 'react'
import { Valores } from '../models/valores'

export default function ResultadoC(props:Valores) {
  return (
    <div>Valor Inicial: {props.valorInicial} grados celcius, equivale a: {props.medidaF} grados Farenheit y {props.medidaK} grados Kelvin</div>
  )
}
