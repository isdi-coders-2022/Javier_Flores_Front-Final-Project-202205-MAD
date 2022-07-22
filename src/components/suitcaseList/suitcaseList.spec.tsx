import { SuitcaseList } from './suitcaseList';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { iState } from '../../app/store';
import { iSuitcase, iUserLogged } from '../../interfaces/interfaces';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { itemReducer } from '../../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';
import { fireEvent, render, screen } from '../../utils/test.utils';

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
    items: [],
    suggestions: [
        {
            id: '1',
            _id: '1',
            name: '1',
            weight: 0,
            destination: 'test',
        },
    ],
    itemsInSuitcase: [
        {
            id: '1',
            _id: '1',
            name: '1',
            weight: 0,
            destination: 'test',
        },
    ],
};

describe('Given the component SuitcaseList', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });
    describe('When the component is called', () => {
        test('Then it should render', () => {
            render(
                <MemoryRouter>
                    <SuitcaseList></SuitcaseList>
                </MemoryRouter>,

                { preloadedState, reducer }
            );
            expect(screen.getByText(/List/i)).toBeInTheDocument();
        });
    });
    describe('When I click the item button', () => {
        test('Then it should be called the dispatch', async () => {
            render(
                <MemoryRouter>
                    <SuitcaseList></SuitcaseList>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = await screen.findByText(/1/i);
            fireEvent.click(element);

            expect(mockDispatch).toHaveBeenCalled();
        });
    });
    describe("When button value is equal to the item's id", () => {
        test('Then it should be called the dispatch', async () => {
            render(
                <MemoryRouter>
                    <SuitcaseList></SuitcaseList>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = await screen.findByText(/1/i);
            fireEvent.click(element);

            expect(mockDispatch).toHaveBeenCalled();
        });
    });
});
