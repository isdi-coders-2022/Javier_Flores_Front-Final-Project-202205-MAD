import { BrowserRouter } from 'react-router-dom';
import { iState, store } from '../../app/store';
import { iSuitcase, iUserLogged } from '../../interfaces/interfaces';
import { itemReducer } from '../../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { CheckList } from './checkList';
import { Provider, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

describe('Given component Checklist', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            const dispatch = jest.fn();
            (useDispatch as jest.Mock).mockReturnValue(dispatch);
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <CheckList />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Check/i)).toBeInTheDocument();
        });
    });
});
