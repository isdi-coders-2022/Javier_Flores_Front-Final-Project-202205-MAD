import { createAction } from '@reduxjs/toolkit';
import { iItem } from '../../interfaces/interfaces';
import { actionTypes } from './action.types';

export const loadItemInSuitcaseAction = createAction<iItem[]>(
    actionTypes['itemInSuitcase@load']
);

export const createItemInSuitcaseAction = createAction<iItem>(
    actionTypes['itemInSuitcase@create']
);

export const modifyItemInSuitcaseAction = createAction<iItem>(
    actionTypes['itemInSuitcase@modify']
);

export const deleteItemInSuitcaseAction = createAction<iItem>(
    actionTypes['itemInSuitcase@delete']
);
export const deleteAllItemInSuitcaseAction = createAction(
    actionTypes['itemInSuitcase@deleteAll']
);
