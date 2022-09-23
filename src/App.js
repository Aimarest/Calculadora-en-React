/* eslint-disable no-fallthrough */
import {useState} from 'react';
import './App.scss';

import { ButtonComponent } from './components/ButtonComponent';
import { ClearButon } from './components/ClearButon';


const App = () => {

const [operator, setOperator] = useState('');
const [firstValue, setFirstValue] = useState('');
const [secondValue, setSecondValue] = useState('');
const [result, setResult] = useState('');
const [error, setError] = useState('');

  const addValue = (value) =>{
    if (operator === ''){
      setFirstValue((firstValue) => firstValue + value );
    }
    else{
      setSecondValue((secondValue) => secondValue + value )
    }
    
  }
  
  const addOperator = (value) =>{
    setOperator(value)
  }
  
  const calculate = (value) =>{
   
     setSecondValue((secondValue) => secondValue + value )
    const firstNumber = parseInt(firstValue);
    const secondNumber = parseInt(secondValue);
  
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
        default: break
    }
  }
  
  const resetResult = () =>{
    
    setFirstValue('');
    setSecondValue('');
    setOperator('');
    setResult('');
    setError('')
  }

  return (
    <div className="App">
    <header>
     <h1>Prueba INNOCV</h1> 
     </header>
      <h2>{firstValue + operator + secondValue}</h2>
      <p>Result: {result} </p>
      <section className='buttons'>
        <ButtonComponent value={'7'} action={addValue} />
        <ButtonComponent value={'8'} action={addValue}/>
        <ButtonComponent value={'9'} action={addValue}/>
        <ButtonComponent value={'%'} action={addOperator}/>
        <ButtonComponent value={'4'} action={addValue} />
        <ButtonComponent value={'5'} action={addValue}/>
        <ButtonComponent value={'6'} action={addValue}/>
        <ButtonComponent value={'X'} action={addOperator} />
        <ButtonComponent value={'/'} action={addOperator}/>
        <ButtonComponent value={'1'} action={addValue}/>
        <ButtonComponent value={'2'} action={addValue}/>
        <ButtonComponent value={'3'} action={addValue}/>
        <ButtonComponent value={'+'} action={addOperator}/>
        <ButtonComponent value={'-'} action={addOperator}/>
        <ButtonComponent value={'='} action={calculate}/>
        <ButtonComponent value={'0'} action={addValue}/>
        <ClearButon value={'Clear'} resetResult={resetResult}/>
        {error}
      </section>

    </div>
  )
  }
export default App;


 