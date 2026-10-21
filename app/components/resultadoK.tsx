import React from 'react'
import { Valores } from '../models/valores'

export default function ResultadoK(props:Valores) {
  return (
    <div>Valor Inicial: {props.valorInicial} grados kelvin, equivale a: {props.medidaF} grados Farenheit y {props.medidaC} grados celsius</div>
  )
}
