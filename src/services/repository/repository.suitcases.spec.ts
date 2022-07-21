import { SuitcasesRepository } from './repository.suitcases';

describe('Given SuitcasesRepository', () => {
    describe('When getSuitcase', () => {
        test('Then should return a suitcase', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                }),
            });
            const result = await new SuitcasesRepository().getSuitcase({
                id: '1',
                destination: '',
                limitWeight: 0,
                owner: '',
                isWeightOk: false,
            });
            expect(fetch).toBeCalled();
            expect(result.id).toBe('1');
        });
    });
    describe('When addSuitcase', () => {
        test('Then should return a suitcase', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                }),
            });
            const result = await new SuitcasesRepository().addSuitcase({
                id: '1',
                destination: '',
                limitWeight: 0,
                owner: '',
                isWeightOk: false,
            });
            expect(fetch).toBeCalled();
            expect(result.id).toBe('1');
        });
    });
    describe('When updateSuitcase', () => {
        test('Then should return a suitcase', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                }),
            });
            const result = await new SuitcasesRepository().updateSuitcase(
                {
                    id: '1',
                    destination: '',
                    limitWeight: 0,
                    owner: '',
                    isWeightOk: false,
                },
                '1'
            );
            expect(fetch).toBeCalled();
            expect(result.id).toBe('1');
        });
    });
    describe('When deleteSuitcase', () => {
        test('Then should return a suitcase', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    _id: '1',
                }),
            });
            const result = await new SuitcasesRepository().deleteSuitcase('1');
            expect(fetch).toBeCalled();
        });
    });
});
