import { BrowserRouter } from 'react-router-dom';
import { iState } from '../../app/store';
import { iSuitcase, iUserLogged } from '../../interfaces/interfaces';
import { itemReducer } from '../../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';
import { suitcaseReducer } from '../../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../../reducers/users.reducer/user.reducer';
import { render, screen } from '../../utils/test.utils';
import { CheckList } from './checkList';
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
    suggestions: [],
    itemsInSuitcase: [],
};

describe('Given component CheckList', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            const { getByText } = render(
                <BrowserRouter>
                    <CheckList name="Checklist"></CheckList>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText('CheckList');
            expect('CheckList').toBeInTheDocument();
        });
    });
});
