import { createReducer } from '@reduxjs/toolkit';
import { iUser } from '../../interfaces/interfaces';
import * as ac from './action.creator';

const initialState: iUser[] = [];

export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadUserAction, (state, action) => [...action.payload])
        .addCase(ac.createUserAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.modifyUserAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteUserAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        );
});
