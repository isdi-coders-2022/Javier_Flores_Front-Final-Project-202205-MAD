import { itemInSuitcaseReducer } from './itemInSuitcase.reducer';
import * as actions from './action.creator';
import { AnyAction } from '@reduxjs/toolkit';
import { iItem } from '../../interfaces/interfaces';

const mockedArray: Array<iItem> = [
    {
        id: '1',
        name: '1',
        weight: 1,
        destination: '1',
    },
    {
        id: '2',
        name: '2',
        weight: 2,
        destination: '2',
    },
];
describe('Given items reducer', () => {
    describe('When calling it with load action with an array of items', () => {
        test('It should return a new state with that array of items', () => {
            const newState = itemInSuitcaseReducer(
                [],
                actions.loadItemInSuitcaseAction(mockedArray)
            );
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action with a item', () => {
        test('It should return a new state with an array with that item', () => {
            const newState = itemInSuitcaseReducer(
                [],
                actions.createItemInSuitcaseAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[0]]);
        });
    });
    describe('When calling it with update action with a  partial item', () => {
        test('It should return a new state with a updated array of items', () => {
            const newState = itemInSuitcaseReducer(
                mockedArray,
                actions.modifyItemInSuitcaseAction({
                    ...mockedArray[0],
                    name: '3',
                    weight: 3,
                    destination: '3',
                })
            );
            expect(newState.find((item) => item.id === '1')?.name).toBe('3');
        });
    });

    describe('When calling it with delete action with a item', () => {
        test('It should return a new state with an array of previous items without the deleted one', () => {
            const newState = itemInSuitcaseReducer(
                mockedArray,
                actions.deleteItemInSuitcaseAction(mockedArray[0])
            );
            expect(newState).toEqual([]);
        });
    });
    describe('When calling it with deleteAll action', () => {
        test('It should return a new state with an empty array', () => {
            const newState = itemInSuitcaseReducer(
                mockedArray,
                actions.deleteAllItemInSuitcaseAction()
            );
            expect(newState).toEqual([]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = itemInSuitcaseReducer(
                mockedArray,
                {} as AnyAction
            );
            expect(newState).toEqual(mockedArray);
        });
    });
});
