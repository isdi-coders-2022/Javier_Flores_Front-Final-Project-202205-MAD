import { configureStore } from '@reduxjs/toolkit';
import { iUser, userWithToken } from '../interfaces/interfaces';
import { userReducer } from '../reducers/users.reducer/user.reducer';

export interface iStore {
    user: userWithToken;
}

export const preloadedState: iStore = {
    user: {} as userWithToken,
};

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState,
});
