import { createReducer } from '@reduxjs/toolkit';
import { iUserLogged } from '../../interfaces/interfaces';
import * as ac from './action.creator';
const initialState: iUserLogged = {
    token: '',
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        suitcases: [],
    },
};
export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadUserAction, (state, action) => action.payload)
        .addCase(
            ac.modifyUserAction,
            (state, action) => (state = action.payload)
        )
        .addCase(ac.createUserAction, (state, action) => action.payload)
        .addCase(ac.deleteUserAction, (state, action) => action.payload)
        .addDefaultCase((state) => state);
});
