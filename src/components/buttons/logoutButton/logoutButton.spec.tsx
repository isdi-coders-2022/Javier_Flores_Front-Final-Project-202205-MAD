import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LogoutButton } from './logoutButton';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../../app/store';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
global.localStorage = {
    clear: jest.fn(),
    getItem: jest.fn(),
    key: jest.fn(),
    removeItem: jest.fn(),
    setItem: jest.fn(),
    length: 0,
};
describe('Given component LogoutButton', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            const dispatch = jest.fn();
            (useDispatch as jest.Mock).mockReturnValue(dispatch);
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LogoutButton />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Logout/i)).toBeInTheDocument();
        });
    });

    describe('When I click the button Logout', () => {
        test('Then it should be called the dispatch', async () => {
            const dispatch = jest.fn();
            (useDispatch as jest.Mock).mockReturnValue(dispatch);
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LogoutButton />
                    </BrowserRouter>
                </Provider>
            );
            fireEvent.click(screen.getByText(/Logout/i));
            expect(dispatch).toHaveBeenCalled();
        });
    });
});
