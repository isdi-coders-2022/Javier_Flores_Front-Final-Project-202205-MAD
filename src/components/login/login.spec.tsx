import { useDispatch } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { iUser } from '../../interfaces/interfaces';
import FormLogin from './login';
import { UsersRepository } from '../../services/repository/repository.users';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

describe('Given the component FormLogin', () => {
    UsersRepository.prototype.loginUser = jest.fn();
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (UsersRepository.prototype.loginUser as jest.Mock).mockResolvedValue(
            mockUser
        );
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });

    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <MemoryRouter>
                    <FormLogin />
                </MemoryRouter>
            );
            expect(screen.getByText(/Enter/i)).toBeInTheDocument();
        });
    });

    describe('When I click the button Login', () => {
        test('Then it should be called the dispatch', async () => {
            render(
                <BrowserRouter>
                    <FormLogin />
                </BrowserRouter>
            );

            fireEvent.click(screen.getByText(/Enter/i));
            await waitFor(() => {
                expect(mockDispatch).toHaveBeenCalled();
            });
        });
    });

    describe('When I change the input text', () => {
        test('Then it should be changed', async () => {
            render(
                <BrowserRouter>
                    <FormLogin />
                </BrowserRouter>
            );
            const input = screen.getByPlaceholderText(
                /name/i
            ) as HTMLFormElement;

            userEvent.type(input, 'testing login');

            const inputAfterTyping = await screen.findByPlaceholderText(
                /name/i
            );

            await waitFor(() => {
                expect(inputAfterTyping).toHaveValue('testing login');
            });
        });
    });
});
