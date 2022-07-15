import { configureStore } from '@reduxjs/toolkit';
import { iItem, iSuitcase, iUserLogged } from '../interfaces/interfaces';
import { itemReducer } from '../reducers/items.reducer/item.reducer';
import { suitcaseReducer } from '../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iState {
    users: iUserLogged;
    userSuitcase: iSuitcase;
    items: Array<iItem>;
    suggestions: Array<iItem>;
}

const preloadedState: iState = {
    users: {} as iUserLogged,
    userSuitcase: {} as iSuitcase,
    items: [],
    suggestions: [],
};

export const store = configureStore({
    reducer: {
        users: userReducer,
        userSuitcase: suitcaseReducer,
        items: itemReducer,
        suggestions: itemReducer,
    },
    preloadedState,
});
