import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { iState, store } from '../../app/store';
import { iSuitcase } from '../../interfaces/interfaces';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { Sum } from './sum';
import { render, screen, waitFor } from '../../utils/test.utils';
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
    userSuitcase: { limitWeight: 0 } as iSuitcase,
    itemsInSuitcase: [{ name: '', weight: 1, destination: '' }],
    users: [] as any,
    items: [],
    suggestions: [],
};
describe('Given component Sum', () => {
    describe('When component is called', () => {
        const preloadedState = {
            userSuitcase: { limitWeight: 0 } as iSuitcase,
            itemsInSuitcase: [],
            users: [] as any,
            items: [],
            suggestions: [],
        };

        test('Then it should render correctly', () => {
            render(
                <BrowserRouter>
                    <Sum />
                </BrowserRouter>,

                {
                    preloadedState,
                    reducer,
                }
            );

            expect(screen.getByText(/no items/i)).toBeInTheDocument();
        });
    });
    describe('When component is called with items in suitcase', () => {
        test('Then it should render correctly', async () => {
            render(
                <BrowserRouter>
                    <Sum />
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            await waitFor(() => {
                expect(screen.getByText(/kg/i)).toBeInTheDocument();
            });
        });
    });
});
