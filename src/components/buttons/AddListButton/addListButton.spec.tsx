import { AddListButton } from './addListButton';
import { Provider, useDispatch } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../../../app/store';
import { BrowserRouter } from 'react-router-dom';
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
describe('Given component AddListButton', () => {
    describe('When component is rendered', () => {
        test('Then component should render', () => {
            const dispatch = jest.fn();
            (useDispatch as jest.Mock).mockReturnValue(dispatch);
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <AddListButton />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Add/i)).toBeInTheDocument();
        });
    });
    describe('When I click the button Add', () => {
        test('Then it should be called the dispatch', async () => {
            const dispatch = jest.fn();
            (useDispatch as jest.Mock).mockReturnValue(dispatch);
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <AddListButton />
                    </BrowserRouter>
                </Provider>
            );
            fireEvent.click(screen.getByText(/Add/i));
            expect(dispatch).toHaveBeenCalled();
        });
    });
});
