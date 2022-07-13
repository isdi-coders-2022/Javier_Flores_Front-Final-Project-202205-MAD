import { createAction } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/interfaces';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadUserAction = createAction<userWithToken>(
    actionTypes['user@load']
);

export const createUserAction = createAction<userWithToken>(
    actionTypes['user@create']
);

export const modifyUserAction = createAction<userWithToken>(
    actionTypes['user@modify']
);

export const deleteUserAction = createAction<userWithToken>(
    actionTypes['user@delete']
);
