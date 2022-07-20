import { MemoryRouter } from 'react-router-dom';
import { iUserLogged } from '../../interfaces/interfaces';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { UsersRepository } from '../../services/repository/repository.users';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { Register } from './register';

const reducer = {
    user: userReducer,
};
const preloadedState = {
    user: {} as iUserLogged,
};

describe('Given the component Register', () => {
    describe('When is called', () => {
        test('Then it shoul render with "crear"', () => {
            render(
                <MemoryRouter>
                    <Register></Register>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText(/Create/i);
            expect(element).toBeInTheDocument();
        });
        describe('When form is filled and click button send', () => {
            test('Then userHttpStore should be called with invalid token', async () => {
                UsersRepository.prototype.registerUser = jest
                    .fn()
                    .mockResolvedValue({ user: { test: 'test' } });
                render(
                    <MemoryRouter>
                        <Register></Register>
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );
                const button = screen.getByRole('button');
                fireEvent.click(button);

                expect(UsersRepository.prototype.registerUser).toBeCalled();
            });

            describe('When form is filled and click button login', () => {
                test('then navigate should be called', () => {
                    UsersRepository.prototype.registerUser = jest
                        .fn()
                        .mockResolvedValue({
                            name: '',
                            user: { test: 'test' },
                        });
                    render(
                        <MemoryRouter>
                            <Register></Register>
                        </MemoryRouter>,
                        { preloadedState, reducer }
                    );
                    const input = screen.getByPlaceholderText(
                        /email/i
                    ) as HTMLFormElement;
                    fireEvent.change(input, { target: { value: 'email' } });

                    const button = screen.getByText(/Create/);
                    fireEvent.click(button);

                    expect(UsersRepository.prototype.registerUser).toBeCalled();
                });
            });
        });
    });
});
