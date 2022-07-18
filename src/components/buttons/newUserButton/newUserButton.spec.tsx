import { NewUserButton } from './newUserButton';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Given component NewUserButton', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            const { getByText } = render(
                <BrowserRouter>
                    <NewUserButton />
                </BrowserRouter>
            );
            expect(screen.getByText('New User')).toBeInTheDocument();
        });
    });
});
