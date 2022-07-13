import { configureStore } from '@reduxjs/toolkit';
import { iItem, iSuitcase, userWithToken } from '../interfaces/interfaces';
import { itemReducer } from '../reducers/items.reducer/item.reducer';
import { suitcaseReducer } from '../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iState {
    items: Array<iItem>;
    users: userWithToken;
    suitcases: Array<iSuitcase>;
}

const preloadedState: iState = {
    items: [],
    users: {} as userWithToken,
    suitcases: [],
};

export const store = configureStore({
    reducer: {
        users: userReducer,
        suitcases: suitcaseReducer,
        items: itemReducer,
    },
    preloadedState,
});
