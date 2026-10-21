import React from 'react'
import { Valores } from '../models/valores'

export default function ResultadoF(props:Valores) {
  return (
    <div>Valor Inicial: {props.valorInicial} grados farenheit, equivale a: {props.medidaC} grados Celsius y {props.medidaK} grados Kelvin</div>
  )
}
