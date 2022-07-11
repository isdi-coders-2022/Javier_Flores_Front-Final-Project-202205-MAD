import { createReducer } from '@reduxjs/toolkit';
import { iItem } from '../../interfaces/interfaces';
import * as ac from './action.creator';

const initialState: iItem[] = [];

export const itemReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadItemAction, (state, action) => [...action.payload])
        .addCase(ac.createItemAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.modifyItemAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteItemAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        );
});
