import { createAction } from '@reduxjs/toolkit';
import { iUserLogged } from '../../interfaces/interfaces';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadUserAction = createAction<iUserLogged>(
    actionTypes['user@load']
);

export const createUserAction = createAction<iUserLogged>(
    actionTypes['user@create']
);

export const modifyUserAction = createAction<iUserLogged>(
    actionTypes['user@modify']
);

export const deleteUserAction = createAction<iUserLogged>(
    actionTypes['user@delete']
);
