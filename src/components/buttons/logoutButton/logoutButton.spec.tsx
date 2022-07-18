import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LogoutButton } from './logoutButton';

describe('Given component LogoutButton', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            const { getByText } = render(
                <BrowserRouter>
                    <LogoutButton />
                </BrowserRouter>
            );
            expect(screen.getByText('Logout')).toBeInTheDocument();
        });
    });
});
