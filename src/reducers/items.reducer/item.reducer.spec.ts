import { itemReducer } from './item.reducer';
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
const mockItem: iItem = {
    _id: '3',
    name: 'test',
    weight: 3,
    destination: '',
};
describe('Given items reducer', () => {
    describe('When calling it with load action with an array of items', () => {
        test('It should return a new state with that array of items', () => {
            const newState = itemReducer(
                [],
                actions.loadItemAction(mockedArray)
            );
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action with a item', () => {
        test('It should return a new state with an array with that item', () => {
            const newState = itemReducer(
                [],
                actions.createItemAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[0]]);
        });
    });
    describe('When calling it with modify action with partial item', () => {
        test('It should return a new state with a updated array of items', () => {
            const initialState = [mockItem];
            const updatedItem = { ...mockItem, name: 'testing' };
            const actionToTest = actions.modifyItemAction(updatedItem);
            const newState = itemReducer(initialState, actionToTest);

            expect(newState).toHaveLength(1);

            expect(newState).toStrictEqual([updatedItem]);
        });
    });

    describe('When calling it with delete action with a item', () => {
        test('It should return a new state with an array of previous items without the deleted one', () => {
            const newState = itemReducer(
                mockedArray,
                actions.deleteItemAction(mockedArray[0])
            );
            expect(newState).toEqual([]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = itemReducer(mockedArray, {} as AnyAction);
            expect(newState).toEqual(mockedArray);
        });
    });
});
