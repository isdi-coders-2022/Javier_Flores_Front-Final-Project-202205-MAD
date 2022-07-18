import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { iUser } from '../../interfaces/interfaces';
import { UsersRepository } from '../../services/repository/repository.users';
import { Register } from './register';

jest.mock('../../services/repository/repository.users');
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

const mockUser = {
    id: 'id',
    _id: 'id',
    token: 'token',
    user: {} as iUser,
};

describe('Given the component Register', () => {
    UsersRepository.prototype.registerUser = jest.fn();
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (UsersRepository.prototype.registerUser as jest.Mock).mockResolvedValue(
            mockUser
        );
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });

    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <MemoryRouter>
                    <Register />
                </MemoryRouter>
            );
            expect(screen.getByText(/Create/i)).toBeInTheDocument();
        });
        describe('When I click the button Register', () => {
            test('Then it should be called the dispatch', async () => {
                render(
                    <Provider store={store}>
                        <BrowserRouter>
                            <Register />
                        </BrowserRouter>
                    </Provider>
                );

                fireEvent.click(screen.getByText(/Create/i));
                await waitFor(() => {
                    expect(mockDispatch).toHaveBeenCalled();
                });
                describe('When I change the input text', () => {
                    test('Then it should be called the dispatch', async () => {
                        render(
                            <BrowserRouter>
                                <Register />
                            </BrowserRouter>
                        );

                        fireEvent.change(screen.getByLabelText(/Name/i), {
                            target: { value: 'name' },
                        });
                        fireEvent.change(screen.getByLabelText(/Email/i), {
                            target: { value: 'email' },
                        });
                        fireEvent.change(screen.getByLabelText(/Password/i), {
                            target: { value: 'password' },
                        });
                        await waitFor(() => {
                            expect(mockDispatch).toHaveBeenCalled();
                        });
                    });
                });
            });
        });
    });
});
