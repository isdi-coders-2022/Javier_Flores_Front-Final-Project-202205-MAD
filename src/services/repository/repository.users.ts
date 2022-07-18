import { iUser, iUserLogged } from '../../interfaces/interfaces';

export class UsersRepository {
    url: string;
    constructor() {
        this.url = 'http://localhost:3900/user/';
    }

    registerUser(user: iUser): Promise<iUser> {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json());
    }
    loginUser(user: Partial<iUser>): Promise<iUserLogged> {
        console.log(user);
        return fetch(this.url + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json());
    }

    deleteUser(id: iUser['id']) {
        return fetch(this.url + id, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }
}
