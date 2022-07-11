import { createAction } from '@reduxjs/toolkit';
import { iItem } from '../../interfaces/interfaces';
import { actionTypes } from './action.types';

export const loadItemAction = createAction<iItem[]>(actionTypes['item@load']);

export const createItemAction = createAction<iItem>(actionTypes['item@create']);

export const modifyItemAction = createAction<iItem>(actionTypes['item@modify']);

export const deleteItemAction = createAction<iItem>(actionTypes['item@delete']);
