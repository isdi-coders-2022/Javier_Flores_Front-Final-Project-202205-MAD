import { iUser, iUserLogged } from '../../interfaces/interfaces';
import { UsersRepository } from './repository.users';

describe('Given UsersRepository', () => {
    describe('When loginUser', () => {
        test('Then should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                    name: 'User 1',
                }),
            });
            const result = await new UsersRepository().loginUser(
                {} as iUserLogged
            );
            expect(fetch).toBeCalled();
            expect(result.id).toBe('1');
        });
    });
    describe('When registerUser', () => {
        test('Then should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    id: '1',
                    name: 'User 1',
                }),
            });
            const result = await new UsersRepository().registerUser({
                name: 'User 1',
                email: '',
                password: '',
            });
        });
        describe('When deleteUser', () => {
            test('Then should return a user', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        id: '1',
                        name: 'User 1',
                    }),
                });
                const result = await new UsersRepository().deleteUser('1');
            });
        });
    });
});
