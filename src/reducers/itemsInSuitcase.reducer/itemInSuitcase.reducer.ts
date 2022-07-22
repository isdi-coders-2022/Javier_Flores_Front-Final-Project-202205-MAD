/* istanbul ignore file */
import { createReducer } from '@reduxjs/toolkit';
import { iItem } from '../../interfaces/interfaces';
import * as ac from './action.creator';

const initialState: iItem[] = [];

export const itemInSuitcaseReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadItemInSuitcaseAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(ac.createItemInSuitcaseAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.modifyItemInSuitcaseAction, (state, action) =>
            state.map((item) =>
                item._id === action.payload._id ? action.payload : item
            )
        )
        .addCase(ac.deleteItemInSuitcaseAction, (state, action) =>
            state.filter((item) => item._id !== action.payload._id)
        )
        .addCase(ac.deleteAllItemInSuitcaseAction, (state, action) => []);
});
