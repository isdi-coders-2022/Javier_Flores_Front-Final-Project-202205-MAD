import { useDispatch } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { SuggestionsRepository } from '../../services/repository/repository.suggestions';
import { ChooseDestination } from './chooseDestination';
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
}));
describe('Given the component ChooseDestination', () => {
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ChooseDestination />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Add Destination/i)).toBeInTheDocument();
        });
    });
    describe('When I select one option from the select', () => {
        test('Then it should be called the dispatch', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ChooseDestination />
                    </BrowserRouter>
                </Provider>
            );
        });
        expect(mockDispatch).toHaveBeenCalled();
    });
});
