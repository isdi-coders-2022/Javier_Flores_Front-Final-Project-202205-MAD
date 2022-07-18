import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RegisterPage } from './registerPage';

describe('Given the component RegisterPage', () => {
    describe('when the component is called', () => {
        test('then it should be rendered', () => {
            render(
                <BrowserRouter>
                    <RegisterPage />
                </BrowserRouter>
            );

            expect(screen.getByText(/Create/i)).toBeInTheDocument();
        });
    });
});
