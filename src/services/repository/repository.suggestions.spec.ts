import { SuggestionsRepository } from './repository.suggestions';

describe('Given SuggestionsRepository', () => {
    describe('When getAllSuggestions', () => {
        test('Then should return an array of two suggestions', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([
                    {
                        id: 1,
                        destination: '',
                        items: [],
                    },
                    {
                        id: 2,
                        destination: '',
                        items: [],
                    },
                ]),
            });
            const result = await new SuggestionsRepository().getAllSuggestions(
                ''
            );
            expect(fetch).toBeCalled();
            expect(result.length).toBe(2);
        });
    });
});
