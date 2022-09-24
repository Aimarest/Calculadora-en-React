import {CalculatorComponent} from '../../src/components/CalculatorComponent';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Test on CalculatorComponent', () => {
    test('Debe mostrar el componente inicial', ()=>{
        const {container} = render(
            <CalculatorComponent/>
        );
        expect(container).toMatchSnapshot();
      //  screen.debug();
    })
    test('Si hago la suma de 2 + 6 el texto del resultado debe ser 8',()=>{
        render(<CalculatorComponent/>);
        const btnValueTwo = screen.getByRole('button', {name:2});
        const btnValueSix = screen.getByRole('button', {name:6});
        const btnSumOperator = screen.getByRole('button', {name:'+'});
        const btnEqual = screen.getByRole('button', {name:'='});
        const textResult = screen.getByText('Result:');

        fireEvent.click(btnValueTwo);
        fireEvent.click(btnSumOperator);
        fireEvent.click(btnValueSix);
        fireEvent.click(btnEqual);
        expect(textResult.innerHTML).toContain('8');
    })
});
