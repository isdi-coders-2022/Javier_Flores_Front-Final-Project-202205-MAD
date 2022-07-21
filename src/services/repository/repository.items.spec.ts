import { ItemsRepository } from './repository.items';

const mockItem = {
    _id: '1',
    name: 'Item 1',
    weight: 1,
    destination: '',
};

describe('Given ItemsRepository', () => {
    describe('When getAllItems', () => {
        test('Then should return an array of two items', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([
                    {
                        id: 1,
                        name: 'Item 1',
                    },
                    {
                        id: 2,
                        name: 'Item 2',
                    },
                ]),
            });
            const result = await new ItemsRepository().getAllItems();
            expect(fetch).toBeCalled();
            expect(result.length).toBe(2);
        });
    });
    describe('When getItem', () => {
        test('Then should return an item', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                    name: 'Item 1',
                }),
            });
            const result = await new ItemsRepository().getItem('1');
            expect(fetch).toBeCalled();
            expect(result.id).toBe('1');
        });
    });

    describe('When addItem', () => {
        test('Then should instantiate a new item', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: 1,
                    name: 'Item 1',
                }),
            });
            const result = await new ItemsRepository().addItem({
                name: 'Item 1',
                weight: 1,
                destination: '',
            });
            expect(fetch).toBeCalled();
            expect(result.id).toBe(1);
        });
    });
    describe('When updateItem', () => {
        test('Then should return an item modified', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                    name: 'Item 1',
                }),
            });
            const result = await new ItemsRepository().updateItem({
                _id: '1',
                name: 'Item 1',
                weight: 1,
                destination: '',
            });
            expect(fetch).toBeCalled();
            expect(result.id).toBe('1');
        });
    });
});
