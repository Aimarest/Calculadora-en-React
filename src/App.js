import {useState} from 'react';
import './App.scss';

import { ButtonComponent } from './components/ButtonComponent';
import { ClearButon } from './components/ClearButon';


const App = () => {

const [operator, setOperator] = useState('');
const [firstValue, setFirstValue] = useState('');
const [secondValue, setSecondValue] = useState('');
const [result, setResult] = useState('');

const text = firstValue + operator + secondValue;

  const addValue = (value) =>{
    if (operator === ''){
      setFirstValue((firstValue) => firstValue + value );
    }
    else{
      setSecondValue((secondValue) => secondValue + value )
    }
    
  }
  
  const addOperator = (value) =>{
    const firstNumber = parseInt(firstValue)
    setOperator(value)
    setFirstValue(firstNumber)
  }

  const calculate = (value) =>{
    setSecondValue((secondValue) => secondValue + value );
    
  }
  
  const resetResult = () =>{
    setFirstValue('');
    setSecondValue('');
    setOperator('');
    setResult('');
  }

  return (
    <div className="App">
    <header>
     <h1>Prueba INNOCV</h1> 
     </header>
      <h2>{text}</h2>
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
      </section>

    </div>
  )
  }
export default App;


 