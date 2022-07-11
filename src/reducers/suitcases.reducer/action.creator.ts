import { createAction } from '@reduxjs/toolkit';
import { iSuitcase } from '../../interfaces/interfaces';
import { actionTypes } from './action.types';

export const loadSuitcaseAction = createAction<iSuitcase[]>(
    actionTypes['suitcase@load']
);

export const createSuitcaseAction = createAction<iSuitcase>(
    actionTypes['suitcase@create']
);

export const modifySuitcaseAction = createAction<iSuitcase>(
    actionTypes['suitcase@modify']
);

export const deleteSuitcaseAction = createAction<iSuitcase>(
    actionTypes['suitcase@delete']
);
