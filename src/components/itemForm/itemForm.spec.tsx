import { ItemForm } from './ItemForm';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { iState, store } from '../../app/store';
import { iSuitcase, iUserLogged } from '../../interfaces/interfaces';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { itemReducer } from '../../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';
import { fireEvent, render, screen, waitFor } from '../../utils/test.utils';
import { ItemsRepository } from '../../services/repository/repository.items';

jest.mock('../../services/repository/repository.items');

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
    userSuitcase: {
        destination: 'beach',
    } as iSuitcase,
    items: [
        {
            id: '1',
            _id: '1',
            name: 'test',
            weight: 0,
            destination: 'test',
        },
    ],
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
const mockItem = {
    name: 'test',
    weight: 1,
};
describe('Given the component ItemForm', () => {
    const mockDispatch = jest.fn();
    beforeEach(() => {
        (ItemsRepository.prototype.addItem as jest.Mock).mockResolvedValue(
            mockItem
        );
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <BrowserRouter>
                    <ItemForm />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            expect(screen.getByText(/Add/i)).toBeInTheDocument();
        });
    });
    describe('When I send submit', () => {
        test('Then repository should be called', async () => {
            render(
                <BrowserRouter>
                    <ItemForm />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const element = await screen.findByText(/create/i);
            fireEvent.click(element);
            await waitFor(() => {
                expect(ItemsRepository.prototype.addItem).toBeCalled();
            });
        });
    });
});
