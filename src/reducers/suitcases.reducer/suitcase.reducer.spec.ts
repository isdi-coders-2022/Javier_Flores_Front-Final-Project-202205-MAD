import { suitcaseReducer } from './suitcase.reducer';
import * as actions from './action.creator';
import { AnyAction } from '@reduxjs/toolkit';
import { iSuitcase } from '../../interfaces/interfaces';

const mockedSuitcase: iSuitcase = 
    {
        id: '1',
        limitWeight: 1,
        owner: '1',
        isWeightOk: false,
    },
  
describe('Given suitcases reducer', () => {
    describe('When calling it with load action with an array of suitcases', () => {
        test('It should return a new state with that array of suitcases', () => {
            const newState = suitcaseReducer(
                [],
                actions.loadSuitcaseAction(mockedSuitcase)
            );
            expect(newState).toEqual(mockedSuitcase);
        });
    });
    describe('When calling it with add action with a suitcase', () => {
        test('It should return a new state with an array with that suitcase', () => {
            const newState = suitcaseReducer(
                [],
                actions.createSuitcaseAction(mockedSuitcase)
            );
            expect(newState).toEqual(mockedSuitcase);
        });
    });
    describe('When calling it with update action with a character or partial suitcase', () => {
        test('It should return a new state with a updated array of suitcases', () => {
            const newState = suitcaseReducer(
                mockedSuitcase,
                actions.modifySuitcaseAction({
                    ...mockedSuitcase,
                    isWeightOk: true,
                })
            );
            expect(newState.find((item) => item.id === '1')?.isWeightOk).toBe(
                true
            );
        });
    });
    describe('When calling it with delete action with a suitcase', () => {
        test('It should return a new state with an array of previous suitcases without the deleted one', () => {
            const newState = suitcaseReducer(
                mockedSuitcase,
                actions.deleteSuitcaseAction(mockedSuitcase[0])
            );
            expect(newState).toEqual([mockedSuitcase[1]]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = suitcaseReducer(mockedSuitcase, {} as AnyAction);
            expect(newState).toEqual(mockedSuitcase);
        });
    });
});
