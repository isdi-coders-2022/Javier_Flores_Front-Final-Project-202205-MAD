import { render, screen } from '@testing-library/react';
import { ItemForm } from './ItemForm';
describe('Given component ItemForm', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            const { getByText } = render(<ItemForm />);
            const element = screen.getByText('Add Item');
            expect(element).toBeInTheDocument();
        });
    });
});
