import  App  from '../src/App';
import {render, screen} from '@testing-library/react';

describe('Test on App component', () => {
    test('The initial component should be displayed', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })
    test('A title should appear with the text Test INNOCV', () => { 
        render(<App/>);
        const title = screen.getByText('Prueba INNOCV');
        expect(title).toBeTruthy();
     })
});
