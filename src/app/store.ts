import { configureStore } from '@reduxjs/toolkit';
import { iItem, iSuitcase, iUserLogged } from '../interfaces/interfaces';
import { itemReducer } from '../reducers/items.reducer/item.reducer';
import { itemInSuitcaseReducer } from '../reducers/itemsInSuitcase.reducer/itemInSuitcase.reducer';
import { suitcaseReducer } from '../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iState {
    users: iUserLogged;
    userSuitcase: iSuitcase;
    items: Array<iItem>;
    suggestions: Array<iItem>;
    itemsInSuitcase: Array<iItem>;
}

const preloadedState: iState = {
    users: {} as iUserLogged,
    userSuitcase: {} as iSuitcase,
    items: [],
    suggestions: [],
    itemsInSuitcase: [],
};

export const store = configureStore({
    reducer: {
        users: userReducer,
        userSuitcase: suitcaseReducer,
        items: itemReducer,
        suggestions: itemReducer,
        itemsInSuitcase: itemInSuitcaseReducer,
    },
    preloadedState,
});
