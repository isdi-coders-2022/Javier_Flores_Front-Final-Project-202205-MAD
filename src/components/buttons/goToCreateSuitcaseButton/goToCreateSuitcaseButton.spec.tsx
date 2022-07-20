import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GoToCreateSuitcaseButton } from './goToCreateSuitcaseButton';

describe('Given the component GoToCreateSuitcaseButton', () => {
    describe('When the component is called', () => {
        test('Then it should render', () => {
            render(
                <BrowserRouter>
                    <GoToCreateSuitcaseButton></GoToCreateSuitcaseButton>
                </BrowserRouter>
            );
            expect(
                screen.getByText(/Go to suitcase creator/i)
            ).toBeInTheDocument();
        });
    });
});
