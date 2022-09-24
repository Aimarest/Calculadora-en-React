import { useState } from 'react';
import { ButtonComponent } from './ButtonComponent';
import { ClearButon } from './ClearButon';
import { EqualButton } from './EqualButton';

export const CalculatorComponent = () => {

    const [operator, setOperator] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [isDisable, setIsDisable] = useState(false)
    const text = firstValue + operator + secondValue;
    const addValue = (value) => {
        setError('');
        if (operator === '') {
            setFirstValue((firstValue) => firstValue + value);
        }
        else {
            setSecondValue((secondValue) => secondValue + value);
        }
    }
    const addOperator = (value) => {
        firstValue !== '' ? setOperator(value) : setError('You have to enter a initial number before');
    }
    const resetResult = () => {
        setIsDisable(false)
        setFirstValue('');
        setSecondValue('');
        setOperator('');
        setResult('');
        setError('')
    }
    const calculate = (value) => {

         if (firstValue && operator && secondValue !== '') {
            setSecondValue((secondValue) => secondValue + value)
            let firstNumber = parseInt(firstValue);
            let secondNumber = parseInt(secondValue);

            switch (operator) {
                case '+':
                    setResult(firstNumber + secondNumber)
                    setError('Click clear button to continue')
                    break
                case '-':
                    setResult(firstNumber - secondNumber)
                    setError('Click clear button to continue')
                    break
                case '/':
                    setResult(firstNumber / secondNumber)
                    setError('Click clear button to continue')
                    break
                case 'X':
                    setResult(firstNumber * secondNumber)
                    setError('Click clear button to continue')
                    break
                case '%':
                     setError('Operation not possible, click clear button to continue')
                    break
                default:
                    break
            }
            setIsDisable(true)
        }
        
        else if (firstValue || secondValue === '') {
            if(operator === '%' && secondValue === '' ){
                let firstNumber = parseInt(firstValue);
                setResult(firstNumber * 10 / 100) 
            }
            else{
                 setError('You have to enter a valid operation. Please click clear button to continue')
            }
           
        }
       
    }

    return (
        <section className='calculator'>


            <div className='input'>
                <p className='text'>{text}</p>
                <p aria-label='errorMessage' className='errorMessage text'>{error}</p>
                <p className='text'>Result: {result} </p>
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
                <EqualButton value={'='} isDisable={isDisable} setError={setError} setIsDisable={setIsDisable} action={calculate} />
                <ButtonComponent value={'0'} isDisable={isDisable} action={addValue} />

            </section>
            <ClearButon value={'Clear'} resetResult={resetResult} />
        </section>
    )
}
