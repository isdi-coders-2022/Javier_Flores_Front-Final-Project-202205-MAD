import { configureStore } from '@reduxjs/toolkit';
import { iUserLogged } from '../interfaces/interfaces';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iStore {
    user: iUserLogged;
}

export const preloadedState: iStore = {
    user: {} as iUserLogged,
};

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState,
});
