import { ButtonComponent } from './ButtonComponent';
import { ResultComponent } from './ResultComponent';
import {useState} from 'react';

export const CalculatorComponent = () => {
const [text, setText] = useState('');

  const addValueToResult = (value) =>{
    setText((text) => [...text, value + ''])
  }
  return (
    <>
      <ResultComponent text={text} />
      <section className='buttons'>
        <ButtonComponent value={7} addValueToResult={addValueToResult} />
        <ButtonComponent value={8} addValueToResult={addValueToResult}/>
        <ButtonComponent value={9} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'%'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'Clear'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={4}addValueToResult={addValueToResult} />
        <ButtonComponent value={5} addValueToResult={addValueToResult}/>
        <ButtonComponent value={6} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'X'}addValueToResult={addValueToResult} />
        <ButtonComponent value={'/'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={1} addValueToResult={addValueToResult}/>
        <ButtonComponent value={2} addValueToResult={addValueToResult}/>
        <ButtonComponent value={3} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'+'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'='} addValueToResult={addValueToResult}/>
        <ButtonComponent value={0} addValueToResult={addValueToResult}/>
      </section>

    </>
  )
}
