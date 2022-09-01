
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import logoFreeCode from './img/freecode.png';
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {

  const [input,setInput] = useState('')

  const addInput = value =>{
    setInput(input + value)
  }
  const calculateResult=()=>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("Agregue valores para realizar el calculo.")
    }
    
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img src={logoFreeCode} alt='Logo de la calculadora' className='logo' />
      </div>
      <div className="calculadora-container">
        <Pantalla input={input}/>
        <div className="fila">
        <Boton manejarClic={addInput} >1</Boton>
        <Boton manejarClic={addInput} >2</Boton>
        <Boton manejarClic={addInput} >3</Boton>
        <Boton manejarClic={addInput} >+</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={addInput} >4</Boton>
        <Boton manejarClic={addInput} >5</Boton>
        <Boton manejarClic={addInput}>6</Boton>
        <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={addInput}>7</Boton>
        <Boton manejarClic={addInput}>8</Boton>
        <Boton manejarClic={addInput}>9</Boton>
        <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={calculateResult}>=</Boton>
        <Boton manejarClic={addInput}>0</Boton>
        <Boton manejarClic={addInput}>.</Boton>
        <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
