import { createReducer } from '@reduxjs/toolkit';
import { iSuitcase } from '../../interfaces/interfaces';
import * as ac from './action.creator';

const initialState: iSuitcase = {
    id: '',
    limitWeight: 0,
    destination: '',
    owner: '',
    isWeightOk: true,
};

export const suitcaseReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadSuitcaseAction, (state, action) => action.payload)
        .addCase(
            ac.createSuitcaseAction,
            (state, action) => (state = action.payload)
        )
        .addDefaultCase((state) => state);
    // .addCase(ac.modifySuitcaseAction, (state, action) =>
    //     state.map((Suitcase) =>
    //         Suitcase.id === action.payload.id ? action.payload : Suitcase
    //     )
    // )
    // .addCase(ac.deleteSuitcaseAction, (state, action) =>
    //     state.filter((Suitcase) => Suitcase.id !== action.payload.id)
    // );
});
