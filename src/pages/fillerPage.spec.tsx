import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { iState, store } from '../app/store';
import { iSuitcase, iUserLogged } from '../interfaces/interfaces';
import { itemReducer } from '../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';
import { suitcaseReducer } from '../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../reducers/users.reducer/user.reducer';
import { render, screen, fireEvent, waitFor } from '../utils/test.utils';
import { FillerPage } from './fillerPage';
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));
const reducer = {
    users: userReducer,
    userSuitcase: suitcaseReducer,
    items: itemReducer,
    suggestions: itemReducer,
    itemsInSuitcase: itemInSuitcaseReducer,
};

const preloadedState: iState = {
    users: {} as iUserLogged,
    userSuitcase: {} as iSuitcase,
    items: [],
    suggestions: [
        {
            id: '1',
            _id: '1',
            name: 'test',
            weight: 0,
            destination: 'test',
        },
    ],
    itemsInSuitcase: [],
};
describe('Given the component FillerPage', () => {
    const mockDispatch = jest.fn();
    beforeEach(() => {
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });
    describe('When the component is called', () => {
        test('Then it should render', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <FillerPage></FillerPage>
                    </BrowserRouter>
                </Provider>,
                { preloadedState, reducer }
            );
            expect(screen.getByText(/suggestions/i)).toBeInTheDocument();
        });
    });
    describe('When clicked item', () => {
        test('Then it should call', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <FillerPage></FillerPage>
                    </BrowserRouter>
                </Provider>,
                { preloadedState, reducer }
            );
            fireEvent.click(screen.getByText(/kg/i));

            await waitFor(() => {
                expect(mockDispatch).toHaveBeenCalled();
            });
        });
    });
});
