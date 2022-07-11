import { userReducer } from './user.reducer';
import * as actions from './action.creator';
import { AnyAction } from '@reduxjs/toolkit';
import { iUser } from '../../interfaces/interfaces';

const mockedArray: Array<iUser> = [
    {
        id: '1',
        name: '1',
        email: '1',
        password: '1',
        suitcases: [],
    },
    {
        id: '2',
        name: '2',
        email: '2',
        password: '2',
        suitcases: [],
    },
];
describe('Given users reducer', () => {
    describe('When calling it with load action with an array of users', () => {
        test('It should return a new state with that array of users', () => {
            const newState = userReducer(
                [],
                actions.loadUserAction(mockedArray)
            );
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action with a user', () => {
        test('It should return a new state with an array with that user', () => {
            const newState = userReducer(
                [],
                actions.createUserAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[0]]);
        });
    });
    describe('When calling it with update action with a character or partial user', () => {
        test('It should return a new state with a updated array of users', () => {
            const newState = userReducer(
                mockedArray,
                actions.modifyUserAction({
                    ...mockedArray[0],
                    name: '3',
                })
            );
            expect(newState.find((item) => item.id === '1')?.name).toBe('3');
        });
    });
    describe('When calling it with delete action with a user', () => {
        test('It should return a new state with an array of previous users without the deleted one', () => {
            const newState = userReducer(
                mockedArray,
                actions.deleteUserAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[1]]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = userReducer(mockedArray, {} as AnyAction);
            expect(newState).toEqual(mockedArray);
        });
    });
});
