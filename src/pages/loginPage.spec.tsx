import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from './loginPage';

describe('Given the component LoginPage', () => {
    describe('when the component is called', () => {
        test('then it should be rendered', () => {
            render(
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
            );

            expect(screen.getByText(/ /i)).toBeInTheDocument();
        });
    });
});
