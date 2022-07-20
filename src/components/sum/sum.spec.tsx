import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { iState, store } from '../../app/store';
import { iSuitcase } from '../../interfaces/interfaces';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { Sum } from './sum';
import { fireEvent, render, screen, waitFor } from '../../utils/test.utils';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { itemReducer } from '../../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';

const reducer = {
    users: userReducer,
    userSuitcase: suitcaseReducer,
    items: itemReducer,
    suggestions: itemReducer,
    itemsInSuitcase: itemInSuitcaseReducer,
};

const preloadedState: iState = {
    userSuitcase: {} as iSuitcase,
    itemsInSuitcase: [],
    users: [] as any,
    items: [],
    suggestions: [],
};
describe('Given component Sum', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <Sum />
                    </BrowserRouter>
                </Provider>,
                {
                    preloadedState,
                    reducer,
                }
            );

            expect(screen.getByText(/no items/i)).toBeInTheDocument();
        });
    });
});
