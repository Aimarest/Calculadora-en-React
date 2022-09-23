import {useState} from 'react';
import './App.scss';

import { ButtonComponent } from './components/ButtonComponent';
import { ClearButon } from './components/ClearButon';
import { SumButton } from './components/SumButton';

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
  
  const resetResult = () =>{
   
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
        <ButtonComponent value={'7'} addValue={addValue} />
        <ButtonComponent value={'8'} addValue={addValue}/>
        <ButtonComponent value={'9'} addValue={addValue}/>
        <ButtonComponent value={'%'} addValue={addValue}/>
      
        <ButtonComponent value={'4'}addValue={addValue} />
        <ButtonComponent value={'5'} addValue={addValue}/>
        <ButtonComponent value={'6'} addValue={addValue}/>
        <ButtonComponent value={'X'}addValue={addValue} />
        <ButtonComponent value={'/'} addValue={addValue}/>
        <ButtonComponent value={'1'} addValue={addValue}/>
        <ButtonComponent value={'2'} addValue={addValue}/>
        <ButtonComponent value={'3'} addValue={addValue}/>
        <SumButton value={'+'}  addOperator={addOperator}/>
        <ButtonComponent value={'='} addValue={addValue}/>
        <ButtonComponent value={'0'} addValue={addValue}/>
        <ClearButon value={'Clear'} resetResult={resetResult}/>
      </section>

    </div>
  )
  }
export default App;


 