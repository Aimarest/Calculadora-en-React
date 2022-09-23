/* eslint-disable no-fallthrough */

import {useState} from 'react';
import './App.scss';

import { ButtonComponent } from './components/ButtonComponent';
import { ClearButon } from './components/ClearButon';
import { EqualButton } from './components/EqualButton';


const App = () => {

const [operator, setOperator] = useState('');
const [firstValue, setFirstValue] = useState('');
const [secondValue, setSecondValue] = useState('');
const [result, setResult] = useState('');
const [error, setError] = useState('');
const [isDisable, setIsDisable] = useState(false)
const text = firstValue + operator + secondValue;
  const addValue = (value) =>{
    setError('');
    if (operator === ''){
      setFirstValue((firstValue) => firstValue + value );
      
    }
    else{
      setSecondValue((secondValue) => secondValue + value );
     
    }
    
  }
  
  const addOperator = (value) =>{
    firstValue !== '' ? setOperator(value) : setError('You have to enter a initial number before')
    
  }
  const resetResult = () =>{
    setIsDisable(false)
    setFirstValue('');
    setSecondValue('');
    setOperator('');
    setResult('');
    setError('')
  }
  const calculate = (value) =>{
   
     setSecondValue((secondValue) => secondValue + value )
    let firstNumber = parseInt(firstValue);
    let secondNumber = parseInt(secondValue);
  
    switch( operator ){
      case '+':
        setResult(firstNumber + secondNumber)
        break
      case '-':
        setResult(firstNumber - secondNumber)
        break
      case '/':
        setResult(firstNumber / secondNumber)
        break
      case 'X':
        setResult(firstNumber * secondNumber)
        break
      case '%':
        secondValue === '' ? setResult(firstNumber * 10 / 100) : setError('operation not possible')
        break
      default: 
        break
    }
    setIsDisable(true)
  }
  
  

  return (
    <div className="App">
      <header>
        <h1 className='title'>Prueba INNOCV</h1>
      </header>
      <section className='calculator'>


        <div className='input'>
          <p className='text'>{text}</p>
          <p  className='text'>Result: {result} </p>
          <p className='errorMessage text'>{error}</p>
        </div>

        <section className='buttons'>
          <ButtonComponent value={'7'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'8'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'9'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'%'} isDisable={isDisable} action={addOperator} />
          <ButtonComponent value={'4'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'5'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'6'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'X'} isDisable={isDisable} action={addOperator} />
          <ButtonComponent value={'1'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'2'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'3'} isDisable={isDisable} action={addValue} />
          <ButtonComponent value={'+'} isDisable={isDisable} action={addOperator} />
          <ButtonComponent value={'-'} isDisable={isDisable} action={addOperator} />
          <ButtonComponent value={'/'} isDisable={isDisable} action={addOperator} />
          <EqualButton value={'='} isDisable={isDisable} setIsDisable={setIsDisable} action={calculate} />
          <ButtonComponent value={'0'} isDisable={isDisable} action={addValue} />
        
        </section>
         <ClearButon value={'Clear'} resetResult={resetResult} />
      </section>
    </div>
  )
  }
export default App;


 