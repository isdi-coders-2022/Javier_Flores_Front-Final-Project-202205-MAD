import { configureStore } from '@reduxjs/toolkit';
import { iItem, iSuitcase, iUserLogged } from '../interfaces/interfaces';
import { itemReducer } from '../reducers/items.reducer/item.reducer';
import { suitcaseReducer } from '../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iState {
    items: Array<iItem>;
    users: iUserLogged;
    suitcases: Array<iSuitcase>;
    suggestions: Array<iItem>;
}

const preloadedState: iState = {
    items: [],
    users: {} as iUserLogged,
    suitcases: [],
    suggestions: [],
};

export const store = configureStore({
    reducer: {
        users: userReducer,
        suitcases: suitcaseReducer,
        items: itemReducer,
        suggestions: itemReducer,
    },
    preloadedState,
});
