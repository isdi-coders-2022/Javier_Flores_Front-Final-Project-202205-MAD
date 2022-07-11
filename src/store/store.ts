import { configureStore } from '@reduxjs/toolkit';
import { iUser } from '../interfaces/interfaces';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iStore {
    user: Array<iUser>;
}

export const preloadedState: iStore = {
    user: [] as Array<iUser>,
};

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState,
});
