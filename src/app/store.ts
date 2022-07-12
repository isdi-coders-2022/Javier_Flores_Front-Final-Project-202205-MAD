import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { iItem, iSuitcase, iUser } from '../interfaces/interfaces';
import { itemReducer } from '../reducers/items.reducer/item.reducer';
import { suitcaseReducer } from '../reducers/suitcases.reducer/suitcase.reducer';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iState {
    items: Array<iItem>;
    users: Array<iUser>;
    suitcases: Array<iSuitcase>;
}

const preloadedState = {
    items: [],
    users: [],
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
