import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { iState, store } from '../../app/store';
import { iSuitcase, iUserLogged } from '../../interfaces/interfaces';
import { itemReducer } from '../../reducers/items.reducer/item.reducer';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { fireEvent, render, screen } from '../../utils/test.utils';
import FormLogin from './login';
import * as reactRedux from 'react-redux';
import { UsersRepository } from '../../services/repository/repository.users';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useNavigate: jest.fn(),
}));

jest.mock('../../services/localStorage');
jest.mock('../../services/http.user');
const preloadedState: iState = {
    users: {} as iUserLogged,
    userSuitcase: {} as iSuitcase,
    items: [],
    suggestions: [],
};

describe('Given the component FormLogin', () => {
    beforeEach(() => {
        UsersRepository.prototype.loginUser = jest.fn().mockResolvedValue({});
    });
    describe('When i render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <FormLogin />
                    </BrowserRouter>
                </Provider>
            );

            expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
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

    describe('When I change the input text', () => {
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

// const reducer = {
//     users: userReducer,
//     suitcases: suitcaseReducer,
//     items: itemReducer,
//     suggestions: itemReducer,
// };

// const preloadedState: iState = {
//     items: [],
//     users: {} as iUserLogged,
//     suitcases: [],
//     suggestions: [],
// };

// describe('Given the component FormLogin', () => {
//     describe('When I render the component', () => {
//         test('Then it should be rendered', () => {
//             render(
//                 <Provider store={store}>
//                     <BrowserRouter>
//                         <FormLogin />
//                     </BrowserRouter>
//                 </Provider>
//             );
//             const placeholder = screen.getByPlaceholderText(/Password/i);
//             expect(placeholder).toBeInTheDocument();
//         });
//     });

//     describe('When I click the button Login', () => {
//         test('Then it should be called the dispatch', () => {
//             const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
//             render(
//                 <Provider store={store}>
//                     <BrowserRouter>
//                         <FormLogin />
//                     </BrowserRouter>
//                 </Provider>,
//                 { preloadedState, store }
//             );

//             fireEvent.click(screen.getByText(/login/i));

//             expect(mockUseDispatch).toHaveBeenCalled();
//         });
//     });
// });
