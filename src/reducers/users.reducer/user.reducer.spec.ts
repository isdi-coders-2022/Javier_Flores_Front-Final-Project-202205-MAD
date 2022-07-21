import { userReducer } from './user.reducer';
import * as actions from './action.creator';
import { AnyAction } from '@reduxjs/toolkit';
import { iUserLogged } from '../../interfaces/interfaces';

const mockedArray: Array<iUserLogged> = [
    {
        token: '1',
        user: {
            id: '1',
            name: '',
            email: '',
            password: '',
            suitcases: [],
        },
    },
    {
        token: '2',
        user: {
            id: '2',
            name: '',
            email: '',
            password: '',
            suitcases: [],
        },
    },
];
describe('Given users reducer', () => {
    describe('When loadUserAction is called', () => {
        it('Then it should return the payload', () => {
            const newState = userReducer(
                {} as iUserLogged,
                actions.loadUserAction(mockedArray[0])
            );
            expect(newState).toEqual(mockedArray[0]);
        });
    });
    describe('When calling it with add action with a user', () => {
        test('It should return a new state with an array with that user', () => {
            const newState = userReducer(
                {} as iUserLogged,
                actions.createUserAction(mockedArray[0])
            );
            expect(newState).toEqual(mockedArray[0]);
        });
    });
    describe('When calling it with update action with a character or partial user', () => {
        test('It should return a new state with a updated array of users', () => {
            const newState = userReducer(
                mockedArray[0],
                actions.modifyUserAction(mockedArray[1])
            );
            expect(newState).toEqual(mockedArray[1]);
        });
    });
    describe('When calling it with delete action with a user', () => {
        test('It should return a new state with an array of previous users without the deleted one', () => {
            const newState = userReducer(
                {} as iUserLogged,
                actions.deleteUserAction(mockedArray[0])
            );
            expect(newState).toEqual(mockedArray[0]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = userReducer(mockedArray[0], {} as AnyAction);

            expect(newState).toEqual(mockedArray[0]);
        });
    });
});
