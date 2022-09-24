import {CalculatorComponent} from '../../src/components/CalculatorComponent';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Test on CalculatorComponent', () => {
    test('It should display the initial component', ()=>{
        const {container} = render(
            <CalculatorComponent/>
        );
        expect(container).toMatchSnapshot();
      //  screen.debug();
    })
    test('If I do the sum of 2 + 6 the text of the result must be 8',()=>{
        render(<CalculatorComponent/>);
        const btnValueTwo = screen.getByRole('button', {name:2});
        const btnValueSix = screen.getByRole('button', {name:6});
        const btnAddOperator = screen.getByRole('button', {name:'+'});
        const btnEqual = screen.getByRole('button', {name:'='});
        const textResult = screen.getByText('Result:');

        fireEvent.click(btnValueTwo);
        fireEvent.click(btnAddOperator);
        fireEvent.click(btnValueSix);
        fireEvent.click(btnEqual);
        expect(textResult.innerHTML).toContain('8');
    })
    test('If I do the division of 10 by 5 the result should be 2 ', () => { 
        render(<CalculatorComponent/>);
        const btnValueOne = screen.getByRole('button', {name:1});
        const btnValueZero = screen.getByRole('button', {name:0});
        const btnValueFive = screen.getByRole('button', {name:5});
        const btnSubOperator = screen.getByRole('button', {name:'/'});
        const btnEqual = screen.getByRole('button', {name:'='});
        const textResult = screen.getByText('Result:');

        fireEvent.click(btnValueOne);
        fireEvent.click(btnValueZero);
        fireEvent.click(btnSubOperator);
        fireEvent.click(btnValueFive);
        fireEvent.click(btnEqual);
        expect(textResult.innerHTML).toContain('2');
     })
});
