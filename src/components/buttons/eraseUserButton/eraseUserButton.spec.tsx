import { EraseUserButton } from './eraseUserButton';
import { UsersRepository } from '../../../services/repository/repository.users';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../../../services/repository/repository.users');
global.localStorage = {
    clear: jest.fn(),
    getItem: jest.fn(),
    key: jest.fn(),
    removeItem: jest.fn(),
    setItem: jest.fn(),
    length: 0,
};

describe('Given EraseUserButton component', () => {
    beforeEach(() => {
        (UsersRepository.prototype.deleteUser as jest.Mock).mockResolvedValue(
            {}
        );
    });

    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <MemoryRouter>
                    <EraseUserButton />
                </MemoryRouter>
            );
            expect(screen.getByText(/Erase User/i)).toBeInTheDocument();
        });
    });

    describe('When I click the button Erase User', () => {
        test('Then it should be called the service', async () => {
            render(
                <MemoryRouter>
                    <EraseUserButton />
                </MemoryRouter>
            );
            fireEvent.click(screen.getByText(/Erase User/i));
            expect(UsersRepository.prototype.deleteUser).toHaveBeenCalled();
        });
    });
});
