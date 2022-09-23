import { ButtonComponent } from './ButtonComponent';
import { ResultComponent } from './ResultComponent';
import {useState} from 'react';

export const CalculatorComponent = () => {
const [result, setResult] = useState([]);

  const addValueToResult = (value) =>{
    console.log(value)
  }
  return (
    <>
      <ResultComponent />
      <section className='buttons'>
        <ButtonComponent value={7} addValueToResult={addValueToResult} />
        <ButtonComponent value={8} addValueToResult={addValueToResult}/>
        <ButtonComponent value={9} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'%'} addValueToResult={addValueToResult}/>
        <ButtonComponent value={'CE'} addValueToResult={addValueToResult}/>
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
