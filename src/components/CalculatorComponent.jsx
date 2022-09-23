import { ButtonComponent } from './ButtonComponent';

import {useState} from 'react';
import { SumButton } from './SumButton';

export const CalculatorComponent = () => {
const [text, setText] = useState('');
const [result, setResult] = useState('');

  const addValueToResult = (value) =>{
    setText((text) => [...text, value + ''])
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
    <>
      <h2>{text}</h2>
      <p>Result: {result} </p>
      <section className='buttons'>
        <ButtonComponent value={7}   onClick={addValueToResult}  />
        <ButtonComponent value={8} onClick={addValueToResult}/>
        <ButtonComponent value={9} onClick={addValueToResult}/>
        <ButtonComponent value={'%'} onClick={addValueToResult}/>
      
        <ButtonComponent value={4} onClick={addValueToResult} />
        <ButtonComponent value={5} onClick={addValueToResult}/>
        <ButtonComponent value={6} onClick={addValueToResult}/>
        <ButtonComponent value={'X'} onClick={addValueToResult} />
        <ButtonComponent value={'/'} onClick={addValueToResult}/>
        <ButtonComponent value={1} onClick={addValueToResult}/>
        <ButtonComponent value={2} onClick={addValueToResult}/>
        <ButtonComponent value={3} onClick={addValueToResult}/>
        <SumButton value={'+'}  sum={sum}/>
        <ButtonComponent value={'='} onClick={addValueToResult}/>
        <ButtonComponent value={0} onClick={addValueToResult}/>
        <ButtonComponent value={'Clear'} resetResult={resetResult}/>
      </section>

    </>
  )
}
