import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ItemForm } from './ItemForm';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

describe('Given the component ItemForm', () => {
    const mockDispatch = jest.fn();
    beforeEach(() => {
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ItemForm />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Add Item/i)).toBeInTheDocument();
        });
    });
    describe('When I send submit', () => {
        test('Then dispatch should be called', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ItemForm />
                    </BrowserRouter>
                </Provider>
            );
            fireEvent.click(screen.getByText(/Create/i));
            await waitFor(() => {
                expect(mockDispatch).toHaveBeenCalled();
            });
        });
    });
});
