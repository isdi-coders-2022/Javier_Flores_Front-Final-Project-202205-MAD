import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { iItem, iSuitcase, iUserLogged } from '../../interfaces/interfaces';
import { UsersRepository } from '../../services/repository/repository.users';
import FormLogin from './login';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
}));

jest.mock('../../services/usersRepository/repository.users');
const preloadedState = {
    user: {} as iUserLogged,
    suitcase: {} as iSuitcase,
    item: {} as iItem,
};

describe('Given the component FormLogin', () => {
    beforeEach(() => {
        UsersRepository.prototype.loginUser = jest.fn().mockResolvedValue({});
    });
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <FormLogin />
                    </BrowserRouter>
                </Provider>
            );

            expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        });
    });

    describe('When i click the button Login', () => {
        test('Then it should be called the dispatch', () => {
            const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <FormLogin />
                    </BrowserRouter>
                </Provider>,
                { preloadedState, store }
            );

            fireEvent.click(screen.getByText(/login/i));

            expect(mockUseDispatch).toHaveBeenCalled();
        });
    });

    describe('When i change the input text', () => {
        test('Then it should be changed', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <FormLogin />
                    </BrowserRouter>
                </Provider>,
                { preloadedState, store }
            );
            const input = screen.getByLabelText(/Username/i) as HTMLFormElement;
            fireEvent.change(input, { target: { value: 'name' } });

            expect(input).toHaveValue('name');
        });
    });
});
