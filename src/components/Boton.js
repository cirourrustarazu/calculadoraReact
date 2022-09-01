import React from 'react'
import '../css/Boton.css'
function Boton(props) {
    const operador =valor=>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }
  return (
    <div className={`boton-contenedor ${operador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
        {props.children}
    </div>
  )
}

export default Boton