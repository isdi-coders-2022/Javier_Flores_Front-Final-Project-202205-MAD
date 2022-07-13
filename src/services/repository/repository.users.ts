import axios from 'axios';
import { iUser, userWithToken } from '../../interfaces/interfaces';
export class UsersRepository {
    url: string;
    constructor() {
        this.url = 'http://localhost:3900/user/';
    }

    registerUser(user: iUser): Promise<iUser> {
        return axios.post(this.url, user);
    }
    loginUser(user: Partial<iUser>): Promise<userWithToken> {
        return axios.post(this.url + 'login', user);
    }

    deleteUser(id: iUser['id']) {
        return axios.delete(this.url + id);
    }
}
