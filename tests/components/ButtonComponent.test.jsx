import { ButtonComponent } from "../../src/components/ButtonComponent";
import { render, screen, fireEvent } from '@testing-library/react';
describe('Test on the ButtonComponent', () => {
    const initialValue = 2;
    const isDisabled = false;
    const action = jest.fn()
    test('The initial component should be displayed', () => {
        const { container } = render(<ButtonComponent value={initialValue} disabled={isDisabled} action={action} />
        );
        expect(container).toMatchSnapshot();
    })
    test('The function should be called when pressing the button', () => {
        render(<ButtonComponent value={initialValue} disabled={isDisabled} action={action} />
        );
        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(action).toHaveBeenCalled();
    })
})
