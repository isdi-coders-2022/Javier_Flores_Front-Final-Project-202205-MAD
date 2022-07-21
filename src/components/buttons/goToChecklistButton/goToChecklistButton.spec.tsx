import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GoToCheckListButton } from './goToChecklistButton';

describe('Given component GoToCheckListButton', () => {
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <BrowserRouter>
                    <GoToCheckListButton />
                </BrowserRouter>
            );
            expect(screen.getByText(/Checklist/i)).toBeInTheDocument();
        });
    });
    describe('When I click on the button', () => {
        test('Then it should be called the dispatch', () => {
            render(
                <BrowserRouter>
                    <GoToCheckListButton />
                </BrowserRouter>
            );
            fireEvent.click(screen.getByText(/Checklist/i));
        });
    });
});
