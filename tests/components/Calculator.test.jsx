import { CalculatorComponent } from '../../src/components/CalculatorComponent';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Test on CalculatorComponent', () => {
    test('It should display the initial component', () => {
        const { container } = render(
            <CalculatorComponent />
        );
        expect(container).toMatchSnapshot();
    })
    test('if the sum of two and six is made the text of the result must be 8', () => {
        render(<CalculatorComponent />);
        const btnValueTwo = screen.getByRole('button', { name: 2 });
        const btnValueSix = screen.getByRole('button', { name: 6 });
        const btnAddOperator = screen.getByRole('button', { name: '+' });
        const btnEqual = screen.getByRole('button', { name: '=' });
        const textResult = screen.getByText('Result:');
        fireEvent.click(btnValueTwo);
        fireEvent.click(btnAddOperator);
        fireEvent.click(btnValueSix);
        fireEvent.click(btnEqual);
        expect(textResult.innerHTML).toContain('8');
    })
    test('If I do the division of 10 by 5 the result should be 2', () => {
        render(<CalculatorComponent />);
        const btnValueOne = screen.getByRole('button', { name: 1 });
        const btnValueZero = screen.getByRole('button', { name: 0 });
        const btnValueFive = screen.getByRole('button', { name: 5 });
        const btnDivOperator = screen.getByRole('button', { name: '/' });
        const btnEqual = screen.getByRole('button', { name: '=' });
        const textResult = screen.getByText('Result:');
        fireEvent.click(btnValueOne);
        fireEvent.click(btnValueZero);
        fireEvent.click(btnDivOperator);
        fireEvent.click(btnValueFive);
        fireEvent.click(btnEqual);
        expect(textResult.innerHTML).toContain('2');
    })
    test('If I do an operation and hit the clear button, the result should be empty', () => {
        render(<CalculatorComponent />);
        const btnValueOne = screen.getByRole('button', { name: 1 });
        const btnValueZero = screen.getByRole('button', { name: 0 });
        const btnValueFive = screen.getByRole('button', { name: 5 });
        const btnSubOperator = screen.getByRole('button', { name: '-' });
        const btnEqual = screen.getByRole('button', { name: '=' });
        const textResult = screen.getByText('Result:');
        const btnClear = screen.getByText('Clear');
        fireEvent.click(btnValueOne);
        fireEvent.click(btnValueZero);
        fireEvent.click(btnSubOperator);
        fireEvent.click(btnValueFive);
        fireEvent.click(btnEqual);
        fireEvent.click(btnClear);
        expect(textResult.innerHTML).toBe("Result: ");
    })
    test('When the percentage of 8 is done, the result is 0.8', () => {
        render(<CalculatorComponent />);
        const btnValueEight = screen.getByRole('button', { name: 8 });
        const btnPercentOperator = screen.getByRole('button', { name: '%' });
        const btnEqual = screen.getByRole('button', { name: '=' });
        const textResult = screen.getByText('Result:');
        fireEvent.click(btnValueEight);
        fireEvent.click(btnPercentOperator);
        fireEvent.click(btnEqual);
        expect(textResult.innerHTML).toBe("Result: 0.8");
    })
    test('When trying to make a percentage with two numbers, I should get an error in the input', () => {
        render(<CalculatorComponent />);
        const btnValueEight = screen.getByRole('button', { name: 8 });
        const btnPercentOperator = screen.getByRole('button', { name: '%' });
        const btnEqual = screen.getByRole('button', { name: '=' });
        const textError = screen.getByLabelText('errorMessage')
        fireEvent.click(btnValueEight);
        fireEvent.click(btnPercentOperator);
        fireEvent.click(btnValueEight);
        fireEvent.click(btnEqual);
        expect(textError.innerHTML).toBe("Operation not possible, click clear button to continue");
    })
    test('When the button has been pressed without an operation performed an error should be displayed on the input', () => {
        render(<CalculatorComponent />)
        const btnEqual = screen.getByRole('button', { name: '=' });
        const textError = screen.getByLabelText('errorMessage');
        fireEvent.click(btnEqual);
        expect(textError.innerHTML).toBe("You have to enter a valid operation. Please click clear button to continue")
    })
});
