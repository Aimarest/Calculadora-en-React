import {useState} from 'react';
import './App.scss';

import { ButtonComponent } from './components/ButtonComponent';
import { SumButton } from './components/SumButton';

const App = () => {

const [text, setText] = useState('');
const [result, setResult] = useState('');

  const addValueToResult = (value) =>{
    setText((text) => `${text + value}`)
    console.log(text)
  }

  const sum = (value) =>{
    setText((text) => parseInt(text));
    addValueToResult(value)
    console.log(text)
  }
  const resetResult = () =>{
    setText('');
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
        <ButtonComponent value={'7'} addValueToResult={addValueToResult} />
        <ButtonComponent value={'8'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'9'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'%'} addValueToResult={addValueToResult}/>
      
        <ButtonComponent value={'4'}addValueToResult={addValueToResult} />
        <ButtonComponent value={'5'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'6'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'X'}addValueToResult={addValueToResult} />
        <ButtonComponent value={'/'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'1'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'2'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'3'} addValueToResult={addValueToResult}/>
        <SumButton value={'+'}  sum={sum}/>
        <ButtonComponent value={'='} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'0'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'Clear'} resetResult={resetResult}/>
      </section>

    </div>
  )
  }
export default App;


 